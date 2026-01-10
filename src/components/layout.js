import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { path: "/", name: "楽曲一覧" },
    { path: "/call-list/", name: "コール一覧" },
  ]

  let header

  const headerContent = (
    <div className="header-container">
      <div className="header-title-area">
        {isRootPath ? (
          <h1 className="main-heading">
            <Link to="/">{title}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </div>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="メニューを開閉"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{headerContent}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `} 陰キャ
      </footer>
    </div>
  )
}

export default Layout