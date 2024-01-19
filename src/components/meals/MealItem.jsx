import React from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";

export const MealItem = ({ title, description, price }) => {
  return (
    <ListItem>
      <Item>
        <h2>{title}</h2>
        <p>{description}</p>
        <b>$ {price}</b>
      </Item>
      <MealItemForm />
    </ListItem>
  );
};

const ListItem = styled("li")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 111px;
`;
const Item = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px;
  div:last-child {
    border: none;
  }
  h2 {
    color: var(--Primary-black, #222);
  }

  p {
    font-style: italic;
  }
  b {
    color: #ad5502;
    font-size: 20px;
  }
`;
