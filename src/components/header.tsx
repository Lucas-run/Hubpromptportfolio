import { Logo } from "./logo";
import styles from "../styles/Header.module.css";

type HeaderProps = {
  logoSrc: string;
  title?: string;
};

export const Header = ({
  logoSrc,
  title = "Hub Prompt Assistants",
}: HeaderProps) => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerInner}>
        <Logo src={logoSrc} alt={title + " logo"} size={58} />
        <h1 className={styles.siteTitle}>{title}</h1>
      </div>
    </header>
  );
};
