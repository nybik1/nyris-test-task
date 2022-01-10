import React from "react";
import styles from "./DragnDropZone.module.scss";
import Image from "next/image";
import { MOCK_IMAGES } from "./mockImages";
import Link from "next/link";

const DragnDropZone = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.svgWrapper}>svg here</div>
        <div className={styles.choosePhoto}>
          <input type="file" id="photo" className={styles.chooseInput} />
          <label htmlFor="photo" className={styles.chooseLabel}>
            Choose photo
          </label>
          <p className={styles.chooseText}>or drag & drop it here</p>
        </div>
        <p className={styles.optionsText}>You can try with these options too:</p>
        <div className={styles.optionsImages}>
          {MOCK_IMAGES.map(({ name, url }) => (
            <div key={name} className={styles.imgWrapper}>
              <Link href={`/${name}`}>
                <Image src={url} alt={name} layout="fill" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragnDropZone;
