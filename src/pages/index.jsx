import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO"
import config from "../../data/SiteConfig"
import PostListing from "../components/PostListing";
import Footer from "../components/Footer";

class Index extends React.Component {

  render() {
    const lessons = this.props.data.lessonsJson.chapters
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle}/>
        <SEO postEdges={lessons}/>
        <main>
          <BodyContainer>
            <h1>JavaScript by Example</h1>
            <p>
              JavaScript is a programming language ubiquitous to web development.
              It is one of the three core web technologies, along with HTML and
              CSS.
            </p>
            <p>It is the most used programming language in the world.</p>
            <p>
              <em>JavaScript By Example</em> is an introduction to JavaScript
              using annotated example code. It is intended for those already
              familiar with programming fundamentals.
            </p>
            <p>
              {' '}
              Inspired by <a href="https://gobyexample.com">Go By Example</a>,{' '}
              <a href="https://lotz84.github.io/haskellbyexample/">Haskell By Example</a>, and{' '}
              <a href="http://jpryan.me/dartbyexample/">
                Dart By Example
              </a>.
            </p>
            <PostListing postEdges={lessons}/>
            <Footer/>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const BodyContainer = styled.div`
    width: 420px;
    margin: 0 auto;
    a {
      color: black;
    }
    ul {
      padding: 0;
      list-style-type: none
    }
    h1 {
      font-weight: 400;
    }
`

export const pageQuery = graphql`
  query MainQuery {
    lessonsJson{
      chapters{
        post{
          id
          childMarkdownRemark{
            fields{
              slug
            }
            frontmatter{
              title
            }
          }
        }
      }
    }
  }
`;
