import React from "react"

export const Circle = ({ style, children, colour }) => (
  <div
    style={{
      background: colour,
      height: "200px",
      width: "200px",
      borderRadius: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"center"
    }}
  >
    <div
      style={{
        margin: "auto",
        ...style,
      }}
    >
      {children}
    </div>
  </div>
)
