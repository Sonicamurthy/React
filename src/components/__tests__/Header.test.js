import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render Header component with a login button  ",()=>{
      render(
     <BrowserRouter>
     <Provider store={appStore} >
     <Header />
     </Provider>
     </BrowserRouter>
      );

      const loginbutton= screen.getByRole("button")

      expect(loginbutton).toBeInTheDocument();
})


it("should render Header component find the cart 0 item   ",()=>{
      render(
     <BrowserRouter>
     <Provider store={appStore} >
     <Header />
     </Provider>
     </BrowserRouter>
      );

      const cartitem= screen.getByText("Cart -0")

      expect(cartitem).toBeInTheDocument();
})

it("should render Header component find the cart with Regex item   ",()=>{
      render(
     <BrowserRouter>
     <Provider store={appStore} >
     <Header />
     </Provider>
     </BrowserRouter>
      );

      const cartitem= screen.getByText(/Cart/)

      expect(cartitem).toBeInTheDocument();
})
 
it("should render Header component  should change to logout onclick  ",()=>{
      render(
     <BrowserRouter>
     <Provider store={appStore} >
     <Header />
     </Provider>
     </BrowserRouter>
      );

      const loginbtn= screen.getByRole("button" ,{name:"Login"}) // To specify the exact button if we have more button 

      fireEvent.click(loginbtn);

      const logoutbtn = screen.getByRole("button" ,{name :"Logout"})

      expect(logoutbtn).toBeInTheDocument();


})