import React from "react"
import "../../styles/index.css"
import { Link } from "gatsby"

export default ({ pageHeader, children }) => {
  return (
    <>
      <div className="app-header">My header</div>
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
