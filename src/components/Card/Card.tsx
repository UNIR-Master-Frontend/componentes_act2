import type { ReactNode } from "react";

import "./styles.css";

export default function Card({
  children,
  onClick = () => {},
}: {
  children: ReactNode;
  onClick: Function;
}) {
  return (
    <div className="card" onClick={() => onClick()}>
      {children}
    </div>
  );
}
