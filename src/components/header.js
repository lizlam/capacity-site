import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#747fe0`,
      marginBottom: `1.45rem`,
      boxShadow: `0 0 2.25rem rgba(0, 0, 255, .2)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
      }}
    >
      <span
        style={{
          color: `white`,
          fontSize: `10em`,
          display: `block`,
          paddingTop: 50,
          marginBottom: 50,
        }}
      >
        ⎐
      </span>
      <h1 style={{ margin: 0, paddingLeft: 20 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            fontSize: `2em`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <h2 class="tag">All the system health information you need.</h2>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
