import { Link } from "react-router-dom";

interface BreadcrumbType {
  crumbs: CrumbType[];
}

export function Breadcrumb({ crumbs }: BreadcrumbType) {
  return (
    <div className="breadcrumb">
      {crumbs.map((crumb, i) => (
        <div key={i}>
          <span>
            <Link to={crumb.link}>{crumb.desc.toUpperCase()}</Link>
          </span>{" "}
          {crumbs.length - 1 !== i ? "/" : ""}
        </div>
      ))}
    </div>
  );
}
