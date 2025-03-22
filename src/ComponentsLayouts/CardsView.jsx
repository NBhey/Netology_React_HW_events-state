import ShopCard from './ShopCard'

const CardsView = ({ cards }) => {
  return (
    <ul>
      {cards.map((el) => {
        return <li></li>;
      })}
    </ul>
  );
};

export default CardsView