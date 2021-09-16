import React from "react";
import styled from "styled-components";
const NewItems = ({ subject, content, category, image }) => {
  return (
    <Wrapper>
      <Image sizeWidth={"30%"}>
        <img src={image} alt="image" />
      </Image>
      <div>
        <Title>{`Temat: ${subject}`}</Title>
        <Text>{`Content: ${content}`}</Text>
        {/* <div>{`Content: ${category}`}</div> */}
      </div>
    </Wrapper>
  );
};

export default NewItems;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 20px;
`;
const Image = styled.div`
  display: flex;
  width: ${(props) => props.sizeWidth};
  & img {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 10px;
  color: #18234b;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
  color: #18234b;
`;
