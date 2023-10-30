import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

const MyComponent = () => {
  return (
    <Wrapper>
      <h1>Hello World</h1>
      <p>This is a paragraph.</p>
    </Wrapper>
  );
};

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
