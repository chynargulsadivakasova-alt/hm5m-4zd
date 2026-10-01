import arrow from '../img/Arrow.png';

export default function ProductCard({title, count, img}) {
  return (
    <div>
        <div>
            <img src={img} alt="product" />
        </div>
        <h3>{title}</h3>
        <p>Тираж: от {count} штук</p>
        <p>Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.</p>
        <a href="#">
            Подробнее 
            <img src={arrow} alt="arrow" />    
        </a>
    </div>
  )
}
