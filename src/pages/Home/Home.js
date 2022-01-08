import React from "react";
import styles from "./Home.module.css";
import homeCircleImg from "assets/images/home-circle.png";
import Reptile_1 from "assets/images/Reptile-1.png";
import ItemDetailsCard from "components/Cards/ItemDetailsCard/ItemDetailsCard";
import stageImg from "assets/images/stage.png";
import Reptile_big_1 from "assets/images/Reptile_big_1.png";
import warrior_img_1 from "assets/images/warrior-img-1.png";
import WarriorCard from "components/Cards/WarriorCard/WarriorCard";
import Controller from "components/Controller/Controller";

import ItemSelector from "components/ItemSelector/ItemSelector";

const data = [
  { slideImg: Reptile_1, stageImg: Reptile_big_1 },
  { slideImg: Reptile_1, stageImg: Reptile_big_1 },
  { slideImg: Reptile_1, stageImg: Reptile_big_1 },
  { slideImg: Reptile_1, stageImg: Reptile_big_1 },
];

function Home() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);

  return (
    <div className={styles.homeWrapper}>
      <img src={homeCircleImg} className={styles.homeCircleImgTop} alt="" />
      <img src={homeCircleImg} className={styles.homeCircleImgBottom} alt="" />

      <div className={styles.homeContent}>
        <div className={styles.homeContent_left}>
          {/* SELECTOR */}
          <div className="mb-25px">
            <ItemSelector
              navigationPrevRef={navigationPrevRef}
              navigationNextRef={navigationNextRef}
              setSlideIndex={setSlideIndex}
              data={data}
            />
          </div>
          {/* ITEM DETAILS */}
          <div className={styles.itemDetails}>
            <ItemDetailsCard />
            <ItemDetailsCard />
            <ItemDetailsCard />
          </div>
        </div>
        <div className={styles.homeContent_center}>
          <div className={styles.homeContent_center_objects}>
            <img src={stageImg} className={styles.stage} alt="" />
            <img
              src={data[slideIndex].stageImg}
              className={styles.object_on_stage}
              alt=""
            />
          </div>
        </div>
        <div className={styles.homeContent_right}>
          <div className={styles.warriorCards}>
            <WarriorCard img={warrior_img_1} />
            <WarriorCard img={warrior_img_1} />
            <WarriorCard img={warrior_img_1} />
            <WarriorCard img={warrior_img_1} />
            <WarriorCard img={warrior_img_1} />
            <WarriorCard img={warrior_img_1} />
          </div>
          <Controller />
        </div>
      </div>
    </div>
  );
}

export default Home;
