import { useLocation, useNavigate } from "react-router";

export default function NavItem({
  path,
  label,
}: {
  label: string;
  path: string;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <li style={{ listStyle: "none" }}>
      <a
        className={`nav-link ${(path === "/" ? pathname === path : pathname.includes(path)) ? "active" : ""}`}
        onClick={() => navigate(path)}
      >
        {label}
      </a>
    </li>
  );
}
