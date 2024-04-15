import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const renderLinks = () => {
    const paths = [
      { path: "/", name: "楽曲一覧" },
      { path: "/call-list/", name: "コール一覧" },
    ];

    return (
      <div className="navigation-links">
        <h2 className="links-title">ページ一覧</h2> 
        <ul>
          {paths.map(({ path, name }) => {
            if (location.pathname !== path) {
              return <li key={path}><Link to={path}>{name}</Link></li>;
            }
            return null;
          })}
        </ul>
      </div>
    );
  };

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {renderLinks()}
      <footer>
        © {new Date().getFullYear()},{` `} 陰キャ
      </footer>
    </div>
  )
}

export default Layout
