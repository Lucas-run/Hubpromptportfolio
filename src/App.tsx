import { useMemo, useState, type JSX } from "react";
import type { Area, Assistant } from "./types";
import { AREAS } from "./data/assistants";
import { Header } from "./components/header";
import { AreaCard } from "./components/AreaCard";
import { ModalImage } from "./components/ModalImage";
import styles from "./styles/App.module.css";

import logoImage from "./assets/logo.jpeg";
import empresaImage from "./assets/empresa.png";
import professoraImage from "./assets/professora.png";

type AppProps = {
  logoSrc?: string;
  brandTitle?: string;
};

export default function App({
  logoSrc = logoImage,
  brandTitle = "IA na Prática: do Zero ao seu Funcionário Digital",
}: AppProps): JSX.Element {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);
  const [selectedAssistant, setSelectedAssistant] = useState<Assistant | null>(
    null
  );

  // CONTROLA QUAL MODAL ESTÁ ABERTO
  const [activeModal, setActiveModal] = useState<
    "empresa" | "professora" | null
  >(null);

  const areas = useMemo<Area[]>(() => AREAS, []);

  function handleToggleArea(id: string) {
    setExpandedArea((prev) => (prev === id ? null : id));
  }

  function handleAssistantClick(assistant: Assistant) {
    setSelectedAssistant(assistant);
    const link = `https://hub-prompt.example.com/assistant/${assistant.id}`;

    // try copying to clipboard (graceful fallback)
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(link).catch(() => {
        // ignore clipboard errors in restricted environments
      });
    }

    // you can replace this with routing, modal open, etc.
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
            <AreaCard
              key={area.id}
              area={area}
              expanded={expandedArea === area.id}
              onToggle={handleToggleArea}
              onAssistantClick={handleAssistantClick}
            />
          ))}

          {/*CARDS ESPECIAIS */}
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

        {selectedAssistant && (
          <aside className={styles.selected} role="status">
            <div className={styles.selectedTitle}>{selectedAssistant.name}</div>
            <strong>Funções do assistente:</strong>
            <div>{selectedAssistant.func}</div>
          </aside>
        )}
      </main>

      <footer className={styles.footer}>
        <small>
          © {new Date().getFullYear()} HubPrompt. Todos os direitos reservados.
        </small>
      </footer>

      {/* EXIBIÇÃO DO MODAL DE ACORDO COM O CARD CLICADO */}
      {activeModal === "empresa" && (
        <ModalImage
          src={empresaImage}
          alt="Quem Somos"
          onClose={() => setActiveModal(null)}
        />
      )}
      {activeModal === "professora" && (
        <ModalImage
          src={professoraImage}
          alt="Quem será sua professora"
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
