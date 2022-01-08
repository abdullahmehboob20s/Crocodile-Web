import React from "react";
import styles from "./WarriorCard.module.css";
import { MdAdd } from "react-icons/md";

function WarriorCard({ img }) {
  return (
    <div className={styles.warriorCard}>
      <div className={`${styles.warriorCard_img} mb-10px`}>
        <img src={img} alt="" />
        <button className="pointer">
          <MdAdd size={18} className="white" />
        </button>
      </div>
      <p className="fs-12px white weight-5">WEB WARRIOR</p>
      <p className="fs-12px white weight-5">
        Type: <span className="red">Boots</span>
      </p>
      <p className="fs-12px white weight-5">
        Rarity: <span className="red">Rare</span>
      </p>
    </div>
  );
}

export default WarriorCard;
