import ItemCard from "./ItemCard.jsx";
import "./Section.css";

export default function Section({ browseItems }) {
  return (
    <section>
      {browseItems.map((item) => {
        return (
          <div className="item-card" key={item.item_id}>
            <ItemCard item={item} />
          </div>
        );
      })}
    </section>
  );
}
