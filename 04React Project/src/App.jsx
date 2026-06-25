import { useState } from 'react'

function App() {
  const [color , setColor] = useState("black")

  return (
    <div className={`h-screen w-screen bg-${color}-500 flex justify-center items-center`} 
      style={{backgroundColor: color}}
    >

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("peru")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "peru"}}>
             peru</button>

          <button 
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "purple"}}>
            Purple</button>

          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "pink"}}>
             Pink</button>

          <button 
          onClick={() => setColor("chartreuse")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "chartreuse"}}>
             Chartreuse</button>

          <button 
          onClick={() => setColor("burlywood")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "burlywood"}}>
             burlywood</button>


          <button 
          onClick={() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "grey"}}>
             Grey</button>

          <button 
          onClick={() => setColor("rebeccapurple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "rebeccapurple"}}>
             rebeccapurple</button>

          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "olive"}}>
            Olive</button>


           <button 
           onClick={() => setColor("Brown")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Brown"}}>
             Brown</button>                       

        </div>
      </div>

    </div>
  )
}

export default App
