import React from "react";
import styles from "./NavigatorHeader.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function NavigatorHeader({ prevRef, nextRef, title }) {
  return (
    <div className={styles.itemSelectorHeader}>
      <button className="pointer" ref={prevRef}>
        <HiArrowLeft size={15} color="white" />
      </button>
      <div>
        {title ? (
          <p className="fs-18px white weight-6 text-center">{title}</p>
        ) : (
          ""
        )}
      </div>
      <button className="pointer" ref={nextRef}>
        <HiArrowRight size={15} color="white" />
      </button>
    </div>
  );
}

export default NavigatorHeader;
