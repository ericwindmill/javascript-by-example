import React from "react"
import styled from 'styled-components'

export default class Footer extends React.Component {

  render() {
    return (
      <FooterContainer>
        <p>by <a href="https://ericwindmill.com">Eric Windmill</a> | <a
          href="https://github.com/ericwindmill/javascript-by-example">Source</a></p>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.div`
  p > a {
    color: grey;
  }
`;
