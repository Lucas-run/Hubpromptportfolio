import type { JSX } from "react";
import styles from "../styles/ModalImage.module.css";

type ModalImageProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

export function ModalImage({
  src,
  alt = "",
  onClose,
}: ModalImageProps): JSX.Element {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className={styles.image} />
      </div>
    </div>
  );
}
