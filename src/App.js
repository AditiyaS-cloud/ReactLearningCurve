import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Help from "./components/Help";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { useState } from "react";
import userContext from "./utils/userContext";
// import Instamart from "./components/Instamart";

// onDemand loading
// Lazy loading
// Dynamic Import

//upon on demand loading --> upon render --> it will suspend the loading
const Offer = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [user, setUser] = useState({
    // email: "xyz@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offer",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Offer />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/** 
   Header
    - Logo(Title)
    - Nav Items
    - Cart
   Body
    - Search bar
    - RestaurantList
        - RestaurantCard (Multiple)
            - Image
            - Name
            - Rating 
            - Cusines
    Footer
        - Links
        - Copyright
*/
