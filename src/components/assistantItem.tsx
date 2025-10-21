import type { Assistant } from "../types";
import styles from "../styles/AssistantItem.module.css";

type AssistantItemProps = {
  assistant: Assistant;
  onClick: (assistant: Assistant) => void;
};

export const AssistantItem = ({ assistant, onClick }: AssistantItemProps) => {
  return (
    <button
      className={styles.assistantItem}
      onClick={() => onClick(assistant)}
      aria-label={`Abrir ${assistant.name}`}
      type="button"
    >
      <div className={styles.assistantName}>{assistant.name}</div>
      {assistant.desc && (
        <div className={styles.assistantDesc}>{assistant.desc}</div>
      )}
    </button>
  );
};
