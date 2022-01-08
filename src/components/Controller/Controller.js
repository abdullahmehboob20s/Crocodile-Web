import React from "react";
import styles from "./Controller.module.css";
import { TiWaves } from "react-icons/ti";
import backgroundIcon from "assets/images/background-icon.png";
import { MdTimer } from "react-icons/md";

function Controller() {
  return (
    <div className={styles.controller_wrapper}>
      <div className={styles.controller_titles}>
        <p className="fs-14px white weight-4">Reset</p>
        <p className="fs-14px white weight-4">Background</p>
        <p className="fs-14px white weight-4">Cart</p>
      </div>
      <div className={styles.controller}>
        <button className={styles.controller_btn}>
          <TiWaves size={26} className="dark-gray" />
        </button>
        <button className={styles.controller_btn}>
          <img src={backgroundIcon} alt="" />
        </button>
        <button className={styles.controller_btn}>
          <MdTimer size={26} className="dark-gray" />
        </button>
      </div>
    </div>
  );
}

export default Controller;
