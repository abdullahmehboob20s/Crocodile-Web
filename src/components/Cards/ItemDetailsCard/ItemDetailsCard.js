import React from "react";
import styles from "./ItemDetailsCard.module.css";
import shoeImg from "assets/images/shoe.png";
import { RiDeleteBin6Line } from "react-icons/ri";

function ItemDetailsCard() {
  return (
    <div className={styles.itemDetail_card}>
      <div className={styles.itemDetail_card_imgWrapper}>
        <div className={styles.itemDetail_card_imgWrapper_holder}>
          <img src={shoeImg} alt="" />
        </div>
      </div>

      <div className={styles.itemDetails_content}>
        <p className="white uppercase fs-12px weight-5">WEB WARRIOR</p>
        <p className="red fs-12px weight-5">
          <span className="gray">Type:</span> Boots
        </p>
        <p className="red fs-12px weight-5">
          <span className="gray">Rarity:</span> Rare
        </p>
      </div>

      <div>
        <button className={`${styles.itemDetails_bin} pointer`}>
          <RiDeleteBin6Line className="gray" size={15} />
        </button>
      </div>
    </div>
  );
}

export default ItemDetailsCard;
