import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Title() {
  return (
    <Wrapper>
      <Title1>Hello World!</Title1>
    </Wrapper>
  );
}
