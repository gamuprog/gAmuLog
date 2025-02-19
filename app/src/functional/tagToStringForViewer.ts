import { Tag } from "@/interfaces/tag";

export function tagToStringForViewer(tag: Tag): string {
  switch (tag) {
    case "Life":
      return "生活";
    case "Programming":
      return "Programming";
    case "JavaScript":
      return "JavaScript";
    case "TypeScript":
      return "TypeScript";
    case "React":
      return "React";
    case "Hooks":
      return "Hooks";
    case "Next":
      return "Next.js";
    case "Infrastructure":
      return "インフラ";
    case "AI":
      return "AI";
    case "CS":
      return "CS";
    case "Tools":
      return "ツール";
    case "Other":
      return "その他";
  }
}
