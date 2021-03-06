import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{`${data.site.siteMetadata.title} | ${pageTitle}`}</title>
      </Helmet>
    </>
  )
}
