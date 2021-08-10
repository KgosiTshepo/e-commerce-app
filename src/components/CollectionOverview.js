import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionItems } from "../redux/selectors/collectionsSelector";
import "./collection-overview.scss";
import CollectionPreview from "./CollectionPreview";

const CollectionOverview = ({ collections }) => (
	<div className="collection-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionItems,
});
export default connect(mapStateToProps)(CollectionOverview);
