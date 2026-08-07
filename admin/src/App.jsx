// import React from 'react'
// import Navbar from './components/Navbar'
// import {Routes, Route} from 'react-router-dom'
// import AddItems from './components/AddItems'
// import List from './components/List'
// import Order from './components/Order'


import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddItems from './components/AddItems'
import List from './components/List'
import Order from './components/Order'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-[#1a120b] text-amber-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10">
        <Routes>
          <Route path='/' element={<AddItems />} />
          <Route path='/list' element={<List />} />
          <Route path='/orders' element={<Order />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App