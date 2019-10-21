import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{`Gala App${title ? ` | ${title}` : ``}`}</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Project Semicolon" />
      </Helmet>
    </>
  )
}

export default Seo
