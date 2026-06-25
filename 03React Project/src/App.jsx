import { useState } from 'react'
import Card from './components/cards'


function App() {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <h1 className="bg-blue-800 text-black text-3xl p-4 rounded-xl mb-6">
        Tailwind finally working 🚀
      </h1>
      <Card />
      <Card />
    </div>
  )
}

export default App
