import PartnersCard from "../ui/PartnersCard";
import Partners1 from "../img/Partners1.png";
import Partners2 from "../img/Partners2.png";
import Partners3 from "../img/Partners3.png";
import Partners4 from "../img/Partners4.png";

export default function Partners() {
  return (
    <section className="partners_section">
      <div className="container partners_cont">
        <PartnersCard title="Partner 1" img={Partners1} />
        <PartnersCard title="Partner 2" img={Partners2} />
        <PartnersCard title="Partner 3" img={Partners3} />
        <PartnersCard title="Partner 4" img={Partners4} />
      </div>
    </section>
  );
}
