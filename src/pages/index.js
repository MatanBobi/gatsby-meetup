import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <h1>Home page!</h1>
      <Link to="/example">Take me to example page</Link>
    </>
  )
}
