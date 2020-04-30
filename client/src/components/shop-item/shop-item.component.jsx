import React from "react";
import { connect } from "react-redux";

import { selectShopItem } from "../../redux/shop/shop.selectors";

const ShopItemComponent = ({ shopItem }) => {
 /*  console.log(shopItem); */
  return <div className="shop-item">Item details here....</div>;
};

const mapStateToProps = (state, ownProps) => ({
 shopItem : selectShopItem(ownProps.match.params.collectionId,ownProps.match.params.itemId)(state)
})

export default connect(mapStateToProps)(ShopItemComponent);
