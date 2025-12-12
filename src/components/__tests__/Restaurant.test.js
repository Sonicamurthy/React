import { render ,screen} from "@testing-library/react"
import Restaurant,{withpromotedRest} from "../Restaurant"
import MOCK_DATA from "../mocks/RestaurantMock.json"
import "@testing-library/jest-dom"

it("Should render the Restaurant component",()=>{

    render(<Restaurant  resdata={MOCK_DATA}/>)

    const name=screen.getByText("Pizza Paradise")

    expect(name).toBeInTheDocument();

})


const VegRestaurant=withpromotedRest(Restaurant);

it("Should render the Restaurant component",()=>{

    render(<VegRestaurant resdata={MOCK_DATA} />)

    const name=screen.getByText("Pizza Paradise")

    expect(name).toBeInTheDocument();

})
