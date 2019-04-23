import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
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
          <Link to="/#projects">work</Link>
        </li>
        <li>
          <Link to="/#background">about me</Link>
        </li>
        <li>
          <Link to="/#contact">contact me</Link>
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
