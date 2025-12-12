// import { render,act ,screen, fireEvent} from "@testing-library/react";
// import RestaurantMenu from "../RestaurantMenu";
// import MOCK_DATA_NAME from "../mocks/CartRestaurantData.json";
// import { BrowserRouter } from "react-router";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore"
// import { MemoryRouter, Routes, Route } from "react-router-dom";

  

// global.fetch=jest.fn(()=>
//      Promise.resolve({
//         json :()=> Promise.resolve(MOCK_DATA_NAME)
//     } ) 
// )
    

// it("Cart compoent testing", async()=>{
//      await act(async ()=>render( 
//         <Provider store={appStore} >
//                  <RestaurantMenu />
//          </Provider>    
//    ) )
    

//     const accordianTitle=  screen.getByText("Signature Burgers (3)")

//     fireEvent.click(accordianTitle);
    

// })


import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/CartRestaurantData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { MemoryRouter, Routes, Route } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Cart component testing", async () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter initialEntries={["/restaurant/234567"]}>
        <Routes>
          <Route path="/restaurant/:resid" element={<RestaurantMenu />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  // Prefer role-based query if this acts like an accordion
  screen.debug()
  const accordionTitle = await screen.findByText(/Signature Burgers/i);
  expect(accordionTitle).toBeInTheDocument();

  fireEvent.click(accordionTitle);

  // after click, one of the items should appear
  const item = await screen.findByText(/Classic Beef Burger/i);
  expect(item).toBeInTheDocument();
});
