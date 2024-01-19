import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MealItem } from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
export const Meals = () => {
  return (
    <StyledSection>
      <ul>
        {DUMMY_MEALS.map((item) => (
          <MealItem
            key={item.id}
            price={item.price}
            description={item.description}
            title={item.name}
          />
        ))}
      </ul>
    </StyledSection>
  );
};

const StyledSection = styled("section")`
  width: 65%;
  height: 100%;
  background: #fff;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 40px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    :not(:last-of-type) {
      border-bottom: 2px solid #d6d6d6;
    }
  }
`;
