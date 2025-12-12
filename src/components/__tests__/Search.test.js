import { act, fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/SearchRestMoskData.json";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search with the input burger" , async ()=>{
    await act (async ()=>
        render(<BrowserRouter><Body /></BrowserRouter>));
    
    const SearchBtn= screen.getByRole("button",{"name":"search"})

    const searchinp= screen.getByTestId("searchinput")

    fireEvent.change(searchinp ,{target:{value:"Pizza"}})

    fireEvent.click(SearchBtn);

    const cards= await screen.findAllByTestId("rescard")

    expect(cards.length).toBe(1)

    //expect(SearchBtn).toBeInTheDocument()


})


it("Should filter the res having more than 4.5 stars",async ()=>{
    await act(async ()=>render ( <BrowserRouter><Body /></BrowserRouter>)) 

    const topRatedBtn= screen.getByRole("button",{"name":"Top rated Rest"})

    //expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn)

    const TopratedRest = screen.getAllByTestId("rescard")

    expect(TopratedRest.length).toBe(3)


})