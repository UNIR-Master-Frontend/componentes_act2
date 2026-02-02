import "./link.css";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ to, children, className = "" }: LinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = to;
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
