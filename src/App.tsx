import { useMemo, useState, type JSX } from "react";
import type { Area, Assistant } from "./types";
import { AREAS } from "./data/assistants";
import { Header } from "./components/header";
import { AreaCard } from "./components/AreaCard";
import { ModalImage } from "./components/ModalImage";
import { useMediaQuery } from "./hooks/useMediaQuery";
import styles from "./styles/App.module.css";

import logoImage from "./assets/logo.jpeg";
import empresaImage from "./assets/empresa.png";
import professoraDesktop from "./assets/professora-ws.png";
import professoraMobile from "./assets/professora-mobile.png";

type AppProps = {
  logoSrc?: string;
  brandTitle?: string;
};

export default function App({
  logoSrc = logoImage,
  brandTitle = "IA na Prática: do Zero ao seu Funcionário Digital",
}: AppProps): JSX.Element {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  // Armazena qual assistente foi clicado e de qual área ele pertence
  const [selectedAssistant, setSelectedAssistant] = useState<{
    assistant: Assistant;
    areaId: string;
  } | null>(null);

  // Detecta se a tela é desktop ou mobile (para imagem do modal)
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Controla qual modal especial está aberto
  const [activeModal, setActiveModal] = useState<
    "empresa" | "professora" | null
  >(null);

  const areas = useMemo<Area[]>(() => AREAS, []);

  function handleToggleArea(id: string) {
    setExpandedArea((prev) => (prev === id ? null : id));
  }

  // Quando clica em um assistente, guarda a área a que ele pertence
  function handleAssistantClick(assistant: Assistant, areaId: string) {
    setSelectedAssistant((prev) => {
      // Se for o mesmo assistente já selecionado → desmarca
      if (
        prev &&
        prev.assistant.id === assistant.id &&
        prev.areaId === areaId
      ) {
        return null;
      }
      // Se for outro assistente ou de outra área → seleciona
      return { assistant, areaId };
    });

    // Copia o link para a área de transferência
    const link = `https://hub-prompt.example.com/assistant/${assistant.id}`;
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(link).catch(() => {});
    }
  }

  return (
    <div className={styles.app}>
      <Header logoSrc={logoSrc} title={brandTitle} />

      <main className={styles.main} role="main">
        <p className={styles.lead}>
          Funcionários Digitais criados durante o curso
        </p>
        <p className={styles.lead}>
          Clique em uma das áreas e conheça a produção de nossos alunos
        </p>

        <div className={styles.areas}>
          {areas.map((area) => (
            <div key={area.id}>
              <AreaCard
                area={area}
                expanded={expandedArea === area.id}
                onToggle={handleToggleArea}
                onAssistantClick={(assistant) =>
                  handleAssistantClick(assistant, area.id)
                }
                selectedAssistant={selectedAssistant}
              />

              {/* Exibe o assistente e suas funções logo abaixo da área correspondente
              <aside
                className={`${styles.selected} ${
                  selectedAssistant && selectedAssistant.areaId === area.id
                    ? styles.selectedShow
                    : ""
                }`}
                role="status"
              >
                {selectedAssistant && selectedAssistant.areaId === area.id && (
                  <>
                    <div className={styles.selectedTitle}>
                      {selectedAssistant.assistant.name}
                    </div>
                    <strong>Funções do assistente:</strong>
                    <div>{selectedAssistant.assistant.func}</div>
                  </>
                )}
              </aside> */}
            </div>
          ))}

          {/* Cards especiais (modal) */}
          <div
            className={styles.specialCard}
            onClick={() => setActiveModal("empresa")}
          >
            Quem Somos
          </div>
          <div
            className={styles.specialCard}
            onClick={() => setActiveModal("professora")}
          >
            Quem será sua professora
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <small>
          © {new Date().getFullYear()} HubPrompt. Todos os direitos reservados.
        </small>
      </footer>

      {/* Modais de imagem */}
      {activeModal === "empresa" && (
        <ModalImage
          src={empresaImage}
          alt="Quem Somos"
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "professora" && (
        <ModalImage
          src={isDesktop ? professoraDesktop : professoraMobile}
          alt="Quem será sua professora"
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
