import type { ModalProps } from "./interface";
import "./styles.css";

export default function Modal(props: ModalProps) {
  if (!props.isOpen) return null;

  return (
    <>
      <div className="modal-overlay visible" onClick={props.onClose}></div>

      <div className="modal visible">
        <div className="modal-container">
          <button className="btn-close" onClick={props.onClose}>
            x
          </button>

          {props.children}
        </div>
      </div>
    </>
  );
}
