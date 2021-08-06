import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../redux/actions/cartAction";
import "./collection-item.scss";
import CustomButton from "./CustomButton";

const CollectionItem = ({ item, addToCart }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className="collection-item">
			<div
				className="item-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="item-name">{name}</span>
				<span className="item-price">{price}</span>
			</div>
			<CustomButton text="Add to Cart" inverted onClick={() => addToCart(item)} />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
