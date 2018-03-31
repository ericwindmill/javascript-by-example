import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import styled from "styled-components"

import SEO from "../components/SEO"
import config from "../../data/SiteConfig"

export default class LessonTemplate extends React.Component {
  render() {
    const {slug} = this.props.pathContext
    const postNode = this.props.data.postBySlug
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO/>
        <BodyContainer>
          <h1>
            {post.title}
          </h1>
          <div dangerouslySetInnerHTML={{__html: postNode.html}}/>
          <Link to={'/'}>Back to main</Link>
        </BodyContainer>
      </div>
    );
  }
}


const BodyContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  a {
   color: gray
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query LessonQuery($slug: String!) {
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
