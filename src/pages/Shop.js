import React from "react";
import CollectionOverview from "../components/CollectionOverview";
import "./shop-page.scss";

const ShopPage = ({ collections }) => (
	<div className="shop-page">
		<CollectionOverview />
	</div>
);

export default ShopPage;
