import React from "react";

const GoodsCard = ({props}) => {
    const {image, data} = props;
    return (
        <div className="goodsCard__card">
            <img src={image} alt="img"/>
            <h3 className="goodsCard__card-name">{data.name}</h3>
            <h3 className="goodsCard__card-price">{data.price}₴</h3>
        </div>
    )
}

export default GoodsCard