import React from "react";
import "./collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
		</div>
	);
};

export default CollectionItem;
