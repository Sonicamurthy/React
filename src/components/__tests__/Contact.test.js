import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"


describe("To group all the test cases",()=>{

     // beforeAll(()=>{
     //      console.log("Before All")
     // })

     //  afterAll(()=>{
     //      console.log("After All")
     // })

     //  beforeEach(()=>{
     //      console.log("Before Each")
     // })

     //  afterEach(()=>{
     //      console.log("After Each")
     // })

    it("Testing contact Heading page",()=>{
     render(<Contact />);

     const heading= screen.getByRole("heading");

     expect(heading).toBeInTheDocument();

});


test("Testing contact Button page",()=>{
     render(<Contact />);

     const Buttonpres= screen.getByRole("button");

     expect(Buttonpres).toBeInTheDocument();

});

test("Testing contact Text page",()=>{
     render(<Contact />);

     const Text = screen.getByText("Submit");

     expect(Text).toBeInTheDocument();

});


test("Testing contact Text page",()=>{
     render(<Contact />);

     const Text = screen.getByPlaceholderText("name");

     expect(Text).toBeInTheDocument();

});

test("Testing contact Text page",()=>{
     render(<Contact />);

     const Text = screen.getAllByRole("textbox");

     expect(Text.length).toBe(2);

});
})
