import React from "react"
import "../../styles/index.css"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from '../SEO'

export default ({ pageHeader, children }) => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
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
      <SEO pageTitle={pageHeader} />
      <div className="app-header">{data.site.siteMetadata.title}</div>
      <div className="page-container">
        <h1 className="header">{pageHeader}</h1>
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/example">Example</Link>
            </li>
          </ul>
        </aside>
        <article className="content">{children}</article>
      </div>
      <footer className="app-footer">My footer</footer>
    </>
  )
}
