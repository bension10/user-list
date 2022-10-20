import React, { PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import usersReducer from "src/reducers/users";
import { Provider } from "react-redux";

const renderWithProvider = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: { users: usersReducer }, preloadedState }),
    ...renderOptions
  },
) => {
  const wrapper: React.FC = ({ children }: PropsWithChildren<{}>) => (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );

  return { store, ...render(ui, { wrapper, ...renderOptions }) };
};

export default renderWithProvider;
