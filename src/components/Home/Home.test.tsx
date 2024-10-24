import { render,screen} from "@testing-library/react"
import Home from "./Home"

test("renders Suresh Ragam",()=>{
    render(<Home/>) //Arrange

    //Act

    //Assert
    const nameElement = screen.getByText('Suresh')
    expect(nameElement).toBeInTheDocument()
})