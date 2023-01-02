import { ProductCard } from '../../components/ProductCard'

export const Home = () => {
  return (
    <div className="prova">
      {/* <ProductCard
        productSrc="https://www.salomon-foodworld.com/media/pages/sortiment/homestyle-angus-burger/2e7024359d-1671725889/homestyle-angus-burger-72dpi-freisteller-e2-800x.jpg"
        productName="angus Burger"
        avaible="Avaible"
        stars={4}
        price="10.20"
      /> */}

      <ProductCard
        title="NEW"
        productSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        available
        stars={2}
        price="4.50"
      />
      <ProductCard
        title="NEW"
        productSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        available
        stars={5}
        price="4.50"
      />

      <ProductCard
        title="NEW"
        productSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        available
        stars={3.5}
        price="4.50"
      />

      <ProductCard
        title="NEW"
        productSrc="https://www.nicepng.com/png/full/52-522825_hamburguesas-de-burger-king.png"
        name="Angus Burger"
        available
        stars={4}
        price="4.50"
      />
    </div>
  )
}
