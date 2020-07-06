import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return <div>My files!</div>
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
