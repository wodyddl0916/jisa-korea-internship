import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import * as lame from "@breezystack/lamejs";

const sampleRate = 44_100;
const bpm = 132;
const beatLength = 60 / bpm;
const durationSeconds = beatLength * 4 * 16;
const totalSamples = Math.floor(sampleRate * durationSeconds);
const left = new Int16Array(totalSamples);
const right = new Int16Array(totalSamples);

const chords = [
  [48, 55, 60, 64], // C
  [45, 52, 57, 60], // Am
  [41, 48, 53, 57], // F
  [43, 50, 55, 59], // G
];
const melody = [
  72, 76, 79, 76, 74, 72, 67, null,
  69, 72, 76, 72, 79, 76, 74, null,
  77, 76, 72, 69, 72, 74, 76, null,
  79, 81, 79, 74, 76, 72, 67, null,
];
const bassPattern = [0, 0, 2, 1];

const midiToFrequency = (note) => 440 * 2 ** ((note - 69) / 12);
const deterministicNoise = (index) => {
  const value = Math.sin(index * 12.9898 + 78.233) * 43_758.5453;
  return (value - Math.floor(value)) * 2 - 1;
};

for (let index = 0; index < totalSamples; index += 1) {
  const time = index / sampleRate;
  const beatPosition = time / beatLength;
  const beatInBar = beatPosition % 4;
  const bar = Math.floor(beatPosition / 4);
  const chord = chords[bar % chords.length];
  let leftSample = 0;
  let rightSample = 0;

  // 짧은 오르간 코드가 박자마다 통통 튀는 리듬을 만듭니다.
  const chordPulseTime = (beatInBar % 2) * beatLength;
  const chordEnvelope = Math.exp(-7.5 * chordPulseTime);
  chord.slice(1).forEach((note, noteIndex) => {
    const frequency = midiToFrequency(note + 12);
    const voice = (
      Math.sin(2 * Math.PI * frequency * time) +
      Math.sin(2 * Math.PI * frequency * 2 * time) * 0.24
    ) * chordEnvelope * 0.032;
    leftSample += voice * (noteIndex === 0 ? 0.72 : 0.48);
    rightSample += voice * (noteIndex === 2 ? 0.72 : 0.48);
  });

  // 8분음표마다 장난감 실로폰 같은 멜로디를 연주합니다.
  const eighthPosition = beatPosition * 2;
  const melodyStep = Math.floor(eighthPosition) % melody.length;
  const melodyNote = melody[melodyStep];
  const melodyTime = (eighthPosition % 1) * beatLength / 2;
  if (melodyNote !== null) {
    const frequency = midiToFrequency(melodyNote + (bar % 8 === 7 ? 12 : 0));
    const envelope = Math.exp(-12 * melodyTime);
    const pluck = (
      Math.sin(2 * Math.PI * frequency * melodyTime) +
      Math.sin(2 * Math.PI * frequency * 2.03 * melodyTime) * 0.43 +
      Math.sin(2 * Math.PI * frequency * 3.97 * melodyTime) * 0.18
    ) * envelope * 0.085;
    const panLeft = melodyStep % 4 < 2 ? 0.82 : 0.48;
    leftSample += pluck * panLeft;
    rightSample += pluck * (1.3 - panLeft);
  }

  // 베이스는 네 박자마다 루트와 코드음을 번갈아 연주합니다.
  const quarterTime = (beatPosition % 1) * beatLength;
  const bassNote = chord[bassPattern[Math.floor(beatPosition) % bassPattern.length]] - 12;
  const bassFrequency = midiToFrequency(bassNote);
  const bassEnvelope = Math.exp(-5.2 * quarterTime);
  const bass = (
    Math.sin(2 * Math.PI * bassFrequency * quarterTime) +
    Math.sin(2 * Math.PI * bassFrequency * 2 * quarterTime) * 0.2
  ) * bassEnvelope * 0.11;
  leftSample += bass;
  rightSample += bass;

  // 킥, 스네어, 하이햇을 합성해 밝고 빠른 행진 느낌을 더합니다.
  const kickFrequency = 58 + 64 * Math.exp(-18 * quarterTime);
  const kick = Math.sin(2 * Math.PI * kickFrequency * quarterTime) * Math.exp(-16 * quarterTime) * 0.13;
  leftSample += kick;
  rightSample += kick;

  const beatNumber = Math.floor(beatPosition) % 4;
  if (beatNumber === 1 || beatNumber === 3) {
    const snare = deterministicNoise(index) * Math.exp(-25 * quarterTime) * 0.055;
    leftSample += snare * 0.8;
    rightSample += snare;
  }

  const hat = deterministicNoise(index + 9_731) * Math.exp(-42 * melodyTime) * 0.026;
  leftSample += hat;
  rightSample += hat * 0.72;

  // 네 마디마다 위로 미끄러지는 엉뚱한 효과음을 넣습니다.
  const phraseTime = (beatPosition % 16) * beatLength;
  if (phraseTime < beatLength * 0.75) {
    const chirpProgress = phraseTime / (beatLength * 0.75);
    const chirpFrequency = 320 + chirpProgress * chirpProgress * 920;
    const chirp = Math.sin(2 * Math.PI * chirpFrequency * phraseTime) * Math.sin(Math.PI * chirpProgress) * 0.045;
    leftSample += chirp * 0.45;
    rightSample += chirp;
  }

  const fadeIn = Math.min(1, time / 0.03);
  const fadeOut = Math.min(1, (durationSeconds - time) / 0.03);
  const master = Math.min(fadeIn, fadeOut) * 0.78;
  left[index] = Math.max(-32_767, Math.min(32_767, Math.round(leftSample * master * 32_767)));
  right[index] = Math.max(-32_767, Math.min(32_767, Math.round(rightSample * master * 32_767)));
}

const encoder = new lame.Mp3Encoder(2, sampleRate, 160);
const chunks = [];
const blockSize = 1_152;

for (let offset = 0; offset < totalSamples; offset += blockSize) {
  const encoded = encoder.encodeBuffer(
    left.subarray(offset, offset + blockSize),
    right.subarray(offset, offset + blockSize),
  );
  if (encoded.length > 0) chunks.push(Buffer.from(encoded));
}

const finalChunk = encoder.flush();
if (finalChunk.length > 0) chunks.push(Buffer.from(finalChunk));

const outputPath = resolve("public/assets/audio/tokyo-odd-parade.mp3");
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, Buffer.concat(chunks));
console.log(`Generated ${outputPath}`);
