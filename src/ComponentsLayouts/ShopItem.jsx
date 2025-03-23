const ShopItem = ({elements}) => {
    console.log(elements)
    return (
        elements.map((el)=>{
            return <li className="shopItem">
                <span><img src={el.img} alt="nike" /></span>
                <span>{el.name}</span>
                <span>{el.color}</span>
                <span>${el.price}</span>
                <span>ADD TO CART</span>
            </li> })
    )
}

export default ShopItem