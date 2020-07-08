import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"
export default function Home() {
  return (
    <>
      <div className="app-header">My header</div>
      <div className="page-container">
        <h1 className="header">Home page!</h1>
        <aside className="sidebar">
          <ul>
            <li>Home</li>
            <li>
              <Link to="/example">Example</Link>
            </li>
          </ul>
        </aside>
        <article className="content">
          <h1>Welcome to my home page</h1>
        </article>
      </div>
      <footer className="app-footer">My footer</footer>
    </>
  )
}
