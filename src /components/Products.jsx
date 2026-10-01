import ProductCard from "../ui/ProductCard";
import product1 from '../img/product.jpg';

export default function Products() {
  return (
    <div className="container product_cont">
      <ProductCard title='Упаковка' count='50' img={product1} />
      <ProductCard title='Пакеты' count='30' img={product1} />
      <ProductCard title='Кейсы' count='200' img={product1} />
      <ProductCard title='Другие изделия' count='10' img={product1} />
    </div>
    
  )
}
