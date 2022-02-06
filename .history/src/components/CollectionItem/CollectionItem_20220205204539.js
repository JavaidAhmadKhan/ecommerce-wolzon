import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

import "./collection-item.styles.scss";

const MAX_LENGTH = 6;

const CollectionItem = ({ item, addItem, history }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        // onClick={() => history.push("/collection-preview")}
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">
          <div>
            {name.length > MAX_LENGTH ? (
              <div>{` ${name.substring(0)}...`}</div>
            ) : (
              <p>{name}</p>
            )}
          </div>
        </span>
        <span className="price">₹{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
