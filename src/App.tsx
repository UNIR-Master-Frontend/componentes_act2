import { useState } from 'react'
import Card from './components/card/Card'
import libroImg from './assets/images/png/libro_cien_anios.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* ⬇️ Esto es SOLO demo temporal */}
      <Card
        rank={1}
        image={libroImg}
        title="The Let Them Theory"
        description="A life-changing tool millions of people can’t stop talking about."
        category="Ficción"
        price={14.99}
        oldPrice={18.99}
        stock={15}
        onAdd={() => console.log('Añadir')}
        onFavorite={() => console.log('Favorito')}
      />

      <div className="vite-demo">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
