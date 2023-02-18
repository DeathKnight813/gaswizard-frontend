import React from 'react';
import { useRoutes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import HomePage from "./pages/HomePage";

export default function Routes() {
  return useRoutes([
    {
      element: <LandingLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    }
  ]);
}