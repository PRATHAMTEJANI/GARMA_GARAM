import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import MainNavigation from './components/MainNavigation'
import axios, { all } from 'axios'

const getAllRecipes=async()=>{
  let AllRecipes = []
  await axios.get('http://localhost:3000/recipe').then(res=>{
    AllRecipes=res.data
  })
  return AllRecipes
}

const router = createBrowserRouter([
  {path:'/', element:<MainNavigation/>,children:[
      {path:'/', element:<Home/>,loader:getAllRecipes}

  ]},
])

export default function App()
{
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}