import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const StyledLi = styled.li`
  background: pink;
`

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout pageHeader={"My files"}>
      <ul>
        {data.allFile.nodes.map(currFile => (
          <li>{currFile.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        relativePath
        birthTime
        name
        root
      }
    }
  }
`
