import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders wihout crashing", () => {
  render(<Card />);
})
