import React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"

const StyledLi = styled.li`
  background: pink;
`

export default function Home() {
  return (
    <Layout pageHeader={"Home page!"}>
      <h1>Welcome to my home page</h1>
    </Layout>
  )
}
