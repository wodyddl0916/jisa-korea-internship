import type { Metadata } from "next";
import { USMedicalActivity } from "../../../usmedical-activity";

export const metadata: Metadata = {
  title: "US Medical インターンシップ活動記録",
  description: "JISA日韓インターンシップを通じてUS Medicalで担当した、ポケデンのPR動画に関する企画・制作・編集の活動記録です。",
};

export default function JapaneseUSMedicalActivityPage() {
  return <USMedicalActivity locale="ja" />;
}
