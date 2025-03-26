import { Tag } from "@/interfaces/tag";

export function tagToStringForViewer(tag: Tag): string {
  switch (tag) {
    case "Life":
      return "生活";
    case "Next":
      return "Next.js";
    case "Infrastructure":
      return "インフラ";
    case "Tools":
      return "ツール";
    case "Other":
      return "その他";
    default:
      return tag;
  }
}
