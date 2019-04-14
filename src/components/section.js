import React from "react"
import PropTypes from "prop-types"

export const Section = ({ name, colour, bleed, children }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "stretch",
    }}
  >
    <div
      style={{
        writingMode: "vertical-lr",
        textOrientation: "sideways",
        textTransform: "uppercase",
        textAlign: "center",
        width: "1.5rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        background: colour,
      }}
    >
      {name}
    </div>
    <div
      style={{
        flexGrow: "1",
        display: " flex",
        background: bleed && colour,
      
      }}
    >
      {children}
    </div>
  </div>
)

Section.propTypes = {
  name: PropTypes.string,
  colour: PropTypes.string,
  bleed: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
