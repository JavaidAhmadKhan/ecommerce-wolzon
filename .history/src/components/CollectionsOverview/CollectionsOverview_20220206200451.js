import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-verview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionprops }) => (
        <CollectionPreview key={id} {...otherCollectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
