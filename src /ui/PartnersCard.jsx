export default function PartnersCard({ title, img }) {
  return (
    <div className="partner_card">
      <img src={img} alt={title} />
    </div>
  );
}
