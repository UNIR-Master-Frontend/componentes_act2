import { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import libroImg from '../../assets/images/png/libro_cien_anios.png'

export default function Library() {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/1132117-1124102-default/libros')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <section>
      {books.map((book, index) => (
        <Card
          key={book.id}
          rank={index + 1}
          image={libroImg}
          title={book.nombre}
          description={`Autor: ${book.autor} · ${book.editorial}`}
          category={book.categoria}
          price={book.precio}
          stock={book.cantidad_disponible}
          onAdd={() => console.log('Añadir', book.id)}
          onFavorite={() => console.log('Favorito', book.id)}
        />
      ))}
    </section>
  )
}
