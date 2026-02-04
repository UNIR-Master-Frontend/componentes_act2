import './Card.css'


type CardProps = {
  rank: number
  image: string
  title: string
  description: string
  category: string
  price: number
  oldPrice?: number
  stock: number
  onAdd: () => void
  onFavorite: () => void
}

export default function Card({
  rank,
  image,
  title,
  description,
  category,
  price,
  oldPrice,
  stock,
  onAdd,
  onFavorite
}: CardProps) {
  return (
    <article className="card">
      <span className="card-rank">{rank}</span>

      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>

        <span className="card-category">{category}</span>

        <div className="card-price">
          {oldPrice && <span className="old-price">${oldPrice}</span>}
          <span className="price">${price}</span>
        </div>

        <div className="card-stock">Stock: {stock}</div>

        <div className="card-actions">
          <button className="add-btn" onClick={onAdd}>
            🛒 Añadir
          </button>

          <button className="fav-btn" onClick={onFavorite}>
            🤍
          </button>
        </div>
      </div>
    </article>
  )
}
