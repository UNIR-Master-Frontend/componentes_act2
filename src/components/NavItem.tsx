import { useLocation } from "react-router";

export default function NavItem({
  path,
  label,
}: {
  label: string;
  path: string;
}) {
  const { pathname } = useLocation();

  return (
    <li style={{ listStyle: "none" }}>
      <a
        className={`nav-link ${(path === "/" ? pathname === path : pathname.includes(path)) ? "active" : ""}`}
        href={path}
      >
        {label}
      </a>
    </li>
  );
}
