import React from "react";
import usersList from "src/mocks_data";
import renderWithProvider from "src/utils/test-utils";

import UserList from "./index";

describe("<UserList />", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  it("component should render properly", () => {
    const { getByText, queryByText } = renderWithProvider(<UserList />, {
      preloadedState: usersList,
    });

    expect(getByText("Leanne Graham")).toBeInTheDocument();
    expect(queryByText("Something Something")).not.toBeInTheDocument();
  });
});
