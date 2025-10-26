import type { Assistant } from "../types";
import { AssistantItem } from "./assistantItem";
import styles from "../styles/AssistantsList.module.css";
import appStyles from "../styles/App.module.css";

type AssistantListProps = {
  assistants: Assistant[];
  onAssistantClick: (assistant: Assistant) => void;
  selectedAssistant: { assistant: Assistant; areaId: string } | null;
};

export const AssistantList = ({
  assistants,
  onAssistantClick,
  selectedAssistant,
}: AssistantListProps) => {
  if (!assistants?.length) return null;
  return (
    <ul className={styles.assistantList} role="list">
      {assistants.map((a) => (
        <li key={a.id}>
          <AssistantItem assistant={a} onClick={onAssistantClick} />
          <aside
            className={`${appStyles.selected} ${
              // A classe 'selectedShow' só é aplicada se este 'a' for o assistente selecionado
              selectedAssistant && selectedAssistant.assistant.id === a.id
                ? appStyles.selectedShow
                : ""
            }`}
            role="status"
          >
            {/* Verificamos novamente para garantir que o conteúdo 
              só exista se este for o item selecionado.
            */}
            {selectedAssistant && selectedAssistant.assistant.id === a.id && (
              <>
                <div className={appStyles.selectedTitle}>
                  {selectedAssistant.assistant.name}
                </div>
                <strong>Funções do assistente:</strong>
                <div>{selectedAssistant.assistant.func}</div>
              </>
            )}
          </aside>
        </li>
      ))}
    </ul>
  );
};
