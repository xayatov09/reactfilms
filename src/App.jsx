import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Films from './components/Films'

export default function App() {
  const [search, setSearch] = useState('Panda')
  return (
    <div className=''>
      <Navbar />
      <Search search={search} setSearch={setSearch} />
      <Films search={search} />
    </div>
  )
}
