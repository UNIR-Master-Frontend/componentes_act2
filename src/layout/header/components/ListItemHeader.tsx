export default function ListItemHeader({
  path,
  label,
  active = false,
}: {
  label: string;
  path: string;
  active: boolean;
}) {
  return (
    <li>
      <a className={`nav-link ${active ? "active" : ""}`} href={path}>
        {label}
      </a>
    </li>
  );
}
