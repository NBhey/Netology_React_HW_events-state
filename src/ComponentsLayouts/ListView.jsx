import ShopItem from './ShopItem'

const ListView = ({ items }) => {
   
  return <ul>
    <ShopItem elements={items}/>
  </ul>;
};

export default ListView
