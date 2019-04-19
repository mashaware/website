import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">work</Link>
        </li>
        <li>
          <Link to="/">about me</Link>
        </li>
        <li>
          <Link to="/">contact me</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header