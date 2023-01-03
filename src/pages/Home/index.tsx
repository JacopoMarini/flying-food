import { ProductCard } from '../../components/ProductCard'

export const Home = () => {
  return (
    <div className="prova">
      <ProductCard
        imgSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        rating={2}
        isAvailable
        price="4.50"
      />
      <ProductCard
        imgSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        isAvailable
        rating={5}
        price="4.50"
      />

      <ProductCard
        imgSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        isAvailable
        rating={3.5}
        price="4.50"
      />

      <ProductCard
        imgSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        isAvailable
        rating={4}
        price="4.50"
      />
    </div>
  )
}
