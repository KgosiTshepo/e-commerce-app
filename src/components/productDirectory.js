import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "../components/menu-container.scss";
import { selectDirectorySections } from "../redux/selectors/directorySelector";
import MenuItem from "./MenuItem";

const ProductDirectory = ({ sections }) => (
	<div className="menu-container">
		{sections.map(({ id, title, imageUrl, size, linkUrl }) => (
			<MenuItem
				key={id}
				title={title}
				imageUrl={imageUrl}
				size={size}
				linkUrl={linkUrl}
				// WIP , use spread operator
			/>
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});
export default connect(mapStateToProps)(ProductDirectory);
