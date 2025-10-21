import type { Assistant } from "../types";
import { AssistantItem } from "./assistantItem";
import styles from "../styles/AssistantsList.module.css";

type AssistantListProps = {
  assistants: Assistant[];
  onAssistantClick: (assistant: Assistant) => void;
};

export const AssistantList = ({
  assistants,
  onAssistantClick,
}: AssistantListProps) => {
  if (!assistants?.length) return null;
  return (
    <ul className={styles.assistantList} role="list">
      {assistants.map((a) => (
        <li key={a.id}>
          <AssistantItem assistant={a} onClick={onAssistantClick} />
        </li>
      ))}
    </ul>
  );
};
