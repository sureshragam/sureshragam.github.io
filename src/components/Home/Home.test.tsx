import { render,screen} from "@testing-library/react"
import Home from "./Home"
import React from "react"

test("renders Suresh Ragam",()=>{
    render(<Home/>) //Arrange

    //Act

    //Assert
    const nameElement = screen.getByText('Suresh')
    expect(nameElement).toBeInTheDocument()
})