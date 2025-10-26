import { useId } from "react";
import type { Area, Assistant } from "../types";
import { AssistantList } from "./assistantsList";
import styles from "../styles/AreaCard.module.css";

type AreaCardProps = {
  area: Area;
  expanded: boolean;
  onToggle: (areaId: string) => void;
  onAssistantClick: (assistant: Assistant) => void;
  selectedAssistant: { assistant: Assistant; areaId: string } | null;
};

export const AreaCard = ({
  area,
  expanded,
  onToggle,
  onAssistantClick,
  selectedAssistant,
}: AreaCardProps) => {
  const id = useId();

  return (
    <section className={styles.areaCard} aria-labelledby={`area-${id}`}>
      <button
        className={styles.areaToggle}
        onClick={() => onToggle(area.id)}
        aria-expanded={expanded}
        aria-controls={`panel-${id}`}
        type="button"
      >
        <span className={styles.areaTitle}>{area.title}</span>
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        hidden={!expanded}
        className={`areaPanel ${expanded ? "open" : ""}`}
      >
        <AssistantList
          assistants={area.assistants}
          onAssistantClick={onAssistantClick}
          selectedAssistant={selectedAssistant}
        />
      </div>
    </section>
  );
};
