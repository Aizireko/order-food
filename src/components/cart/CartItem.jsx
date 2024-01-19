import React from "react";
import { IconButton } from "../UI/IconButton";
import styled from "styled-components";

export const CartItem = () => {
  return (
    <ListItem>
      <StyledContainerName>
        <h2>Barbecue Burger</h2>
        <WrapperPrice>
          <b>$22.99</b>
          <span>x1</span>
        </WrapperPrice>
      </StyledContainerName>
      <ActionsButton>
        <IconButton Icon />
        <IconButton />
      </ActionsButton>
    </ListItem>
  );
};

const ListItem = styled("li")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #d6d6d6;
  &:first-of-type {
    padding-top: 0;
  }
`;

const StyledContainerName = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2 {
    color: #222;
    font-size: 20px;
    font-weight: 600;
  }
`;

const WrapperPrice = styled("div")`
  display: flex;
  align-items: center;
  gap: 47px;
  b {
    color: #ad5502;
    font-size: 18px;
    font-weight: 600;
  }
  span {
    width: 46px;
    height: 2rem;
    border-radius: 6px;
    border: 1px solid #d6d6d6;
    display: grid;
    place-items: center;
    text-align: center;
  }
`;

const ActionsButton = styled("div")`
  display: flex;
  align-items: end;
  gap: 14px;
  transform: translateY(20px);
`;
