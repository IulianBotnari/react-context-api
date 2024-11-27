import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'


import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from './Context/GlobalContext'





import './App.css'

function App() {






  return (
    <>
      <GlobalContext>

        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/about" element={<About />} />
              <Route path="/addpost" element={<CreatePost />} />
              <Route path="/post/:id" element={<PostPage />} />




            </Route>
          </Routes>
        </BrowserRouter>

      </GlobalContext>



    </>
  )
}

export default App
