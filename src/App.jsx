import React from 'react'
import './App.css'

import { TextForm, About, Layout } from './components'
import {
  Route,
  RouterProvider, createBrowserRouter, createRoutesFromElements,

} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<TextForm />} />
      <Route path="about" element={<About />} />
    </Route>

  )
);

const App = () => {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
