import React from "react";
import PropTypes from "prop-types";
import Flex from "../components/atoms/Flex";
import styled from "styled-components";
import Typo from "../components/atoms/Typography";
import { font } from "../styles/_variables";

const Container = styled(Flex)`
  width: 100%;
  height: 1024px;
  background: radial-gradient(50% 50% at 50% 50%, #434343 0%, #353535 100%);
  justify-content : center;
  align-items : center;
`;

const Typos = styled(Typo)`
  color : white;
  width : fit-content;
  margin : 0;
`

const index = (props) => {
  return (
    <Container>
      <Typos variant="h1" font={font.bold}>Hello</Typos>
    </Container>
  );
};

index.propTypes = {};

export default index;
