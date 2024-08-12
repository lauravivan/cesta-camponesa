import { Link } from "react-router-dom";

export function Breadcrumb({ crumbs }: { crumbs: CrumbType[] }) {
  return (
    <div>
      {crumbs.map((crumb: CrumbType, i: number) => {
        if (crumb) {
          return (
            <div>
              <span>
                <Link to={crumb.link}>{crumb.desc.toUpperCase()}</Link>
              </span>{" "}
              {""}
              {crumbs.length - 1 !== i ? "/" : ""}
            </div>
          );
        }
      })}
    </div>
  );
}
