const ShopCard = ({card}) => {
    console.log(card)

    return (
        card.map((el, index) => {
            return <li key={index}>
                <h3>{el.name}</h3>
                <p>{el.color}</p>
                <img src={el.img} alt="nike" />
                <div>
                    <span>${el.price}</span>
                    <span> Add to Cart</span>
                </div>
            </li>
        })
    )
}

export default ShopCard