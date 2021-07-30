import React from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOPPING_ITEMS_DATA from "../data/Collections";

class ShopPage extends React.Component {
	state = {
		collections: SHOPPING_ITEMS_DATA,
	};

	render() {
		const { collections } = this.state;
		console.log(collections);
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
