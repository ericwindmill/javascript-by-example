import React from 'react'
import Link from 'gatsby-link'

class PostListing extends React.Component {

  getPostList() {
    console.log(this.props.postEdges);
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.post.childMarkdownRemark.fields.slug,
        title: postEdge.post.childMarkdownRemark.frontmatter.title
      })
    })
    return postList
  }

  render() {
    const postList = this.getPostList()
    return (
      <div>
        {/* Your post list here. */
          postList.map(post => (
            <Link to={post.path} key={post.title}>
              <p>{post.title}</p>
            </Link>
          ))}
      </div>
    )
  }
}

export default PostListing
