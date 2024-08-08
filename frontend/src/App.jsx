import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>  </Route>
      <Route path="edit/:taskID" element={<Edit />} />
    
    </Routes>
  </BrowserRouter>
  )
}

export default App