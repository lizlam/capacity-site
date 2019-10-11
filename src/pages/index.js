import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(props => <Link {...props} />)`
  color: white;
  background: #747fe0;
  border: 1px black dotted;
  padding: 1em;
  margin: 1.5em;

  &:hover {
    background: grey;
  }
`

const StyledATag = styled.a`
  color: white;
  background: #747fe0;
  border: 1px black dotted;
  padding: 1em;
  margin: 1em;

  &:hover {
    background: grey;
    cursor: pointer;
  }
`

const StyledText = styled.div`
  font-size: 70px;
  font-weight: 700;
  font-family: sans-serif;
  padding: 0.5em;
`

const StyledParagraph = styled.p`
  font-family: sans-serif;
  font-size: 23px;
`
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDiv2 = styled.div`
  margin-top: 2em;
  color: whitesmoke;
  background: #747fe0;
  height: 15em;

  max-width: 960;
  padding: 10px 1.0875rem 1.45rem;
  padding-top: 5em;
`

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <h1>Scale with confidence</h1>
      <StyledParagraph>
        CPU usage. Resource availability. 1 REST endpoint.
      </StyledParagraph>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <StyledDiv>
        <StyledLink to="/get-started/">Get Started</StyledLink>
        <StyledLink to="/download/">Download</StyledLink>
        <StyledLink to="/docs/">Documentation</StyledLink>
        <StyledLink to="/community/">Community</StyledLink>
        <StyledATag href="https://github.com/rosskeenhouse/capacity">
          Github
        </StyledATag>
      </StyledDiv>
    </Layout>
    <StyledDiv2>
      <h2>Simple API Usage</h2>
    </StyledDiv2>
  </>
)

export default IndexPage
