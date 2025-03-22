import ShopCard from './ShopCard'

const CardsView = ({ cards }) => {
  return (
    <ul className='ShopCard'>
        <ShopCard card = {cards} />
    </ul>
  );
};

export default CardsView