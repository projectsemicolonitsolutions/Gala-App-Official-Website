import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ pageTitle, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const { title, author } = site.siteMetadata

  return (
    <>
      <Helmet>
        <title>{`${pageTitle ? `${pageTitle} | ` : ``}${title}`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={author} />
      </Helmet>
    </>
  )
}

export default Seo
