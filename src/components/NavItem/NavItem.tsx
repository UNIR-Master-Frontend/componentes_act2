import { useLocation, useNavigate } from "react-router";

export default function NavItem({
  path,
  label,
  onClick,
}: {
  label: string;
  path: string;
  onClick?: () => void;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <li style={{ listStyle: "none" }}>
      <a
        className={`nav-link ${(path === "/" ? pathname === path : pathname.includes(path)) ? "active" : ""}`}
        onClick={() => {
          navigate(path);
          if (onClick) onClick();
        }}
      >
        {label}
      </a>
    </li>
  );
}
