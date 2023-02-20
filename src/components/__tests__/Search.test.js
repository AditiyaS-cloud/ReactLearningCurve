import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Search Results on HomePage", () => {
  render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
});
