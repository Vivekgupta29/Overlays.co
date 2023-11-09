import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import { AllProducts, Homepage, RichCotton, Men, Women, Contact } from './components'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="allproducts" element={<AllProducts />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="richcotton" element={<RichCotton />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
