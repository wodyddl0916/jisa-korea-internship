import type { Metadata } from "next";
import { USMedicalActivity } from "../../../../usmedical-activity";

export const metadata: Metadata = {
  title: "US Medical 인턴십 활동 기록",
  description: "JISA 한일 인턴십을 통해 US Medical에서 담당한 포케덴 홍보 영상의 기획, 제작, 편집 활동 기록입니다.",
};

export default function KoreanUSMedicalActivityPage() {
  return <USMedicalActivity locale="ko" />;
}
