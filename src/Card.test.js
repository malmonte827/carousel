import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import React from "react";

it("renders without cradshing", function(){
    render(<Card/>)
})

it("matches snapshot", function(){
    const {asFragment} = render(<Card/>)
    expect(asFragment()).toMatchSnapshot
})