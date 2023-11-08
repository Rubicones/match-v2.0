'use client';

import Image from "next/image";
import styles from "./uikit.module.sass";
import { Quicksand } from 'next/font/google'
import cast_icon from "../../public/cast_icon.svg";
import crew_icon from "../../public/crew_icon.svg";
import { useEffect, useRef, useState } from "react";

const quicksand = Quicksand({ weight: "400", subsets: ['latin'] })
    
export default function Switch() {
    const [isChecked, setIsChecked] = useState(false)

    
    return (
        <div className={styles.switchContainer}>
            <span className={styles.castTitle}>I AM<br/>LOOKING<br/>FOR</span>
            <label className={styles.switch}>
                <Image src={cast_icon} alt="cast icon" className={styles.castIcon}/>
                <Image src={crew_icon} alt="crew icon" className={styles.crewIcon}/>
                <input type="checkbox" onChange={() => setIsChecked(o => !o)}/>
                <span className={styles.slider}></span>
                <div className={styles.switchSplitLine}></div>
            </label>
            <span className={styles.crewTitle}>{isChecked ? "CAST" : "CREW"}</span>
        </div>
    );
}
