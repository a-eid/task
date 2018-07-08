import React from "react"
import { WContext } from "../../index"

/**
 * this component assume the existance of img, img@2x and img@3x
 * also assumes .png extension.
 */

const Img = ({ src, ...props }) => (
  <WContext.Consumer>
    {({ type }) => (
      <img
        src={require(`../../assets/imgs/${src}${
          type === "desktop" ? "@3x" : type === "tablet" ? "@2x" : ""
        }.png`)}
        {...props}
      />
    )}
  </WContext.Consumer>
)

export default Img
