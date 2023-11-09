"use client";

import Image from "next/image";
import styles from "./uikit.module.sass";
import { Quicksand } from "next/font/google";
import poster1 from "../../public/mockPoster1.png";
import poster2 from "../../public/mockPoster2.png";
import matchPhoto from "../../public/mockMatchPhoto.png";
import { useEffect, useRef, useState } from "react";

const quicksand = Quicksand({ weight: "300", subsets: ["latin"] });
// const quicksand = Quicksand({ weight: "500", subsets: ["latin"] });

const MatchedMovie = ({ side, posterUrl, role, name }) => {
    return (
        <div
            className={
                side === "left" ? styles.movieMiniLeft : styles.movieMiniRight
            }
            style={{ backgroundImage: `url(${posterUrl})` }}
        >
            <span className={`${styles.matchRole} ${quicksand.className}`}>{role}</span>
            <span className={`${styles.matchName} ${quicksand.className}`}>{name}</span>
        </div>
    );
};

export default function MatchToken() {
    const [matchName, setMatchName] = useState("Simon Pegg");
    return (
        <>
            <div className={styles.matchTokenContainer}>
                <MatchedMovie
                    side="left"
                    posterUrl={poster1.src}
                    role={"Nicolas Angel".toUpperCase()}
                    name={matchName.toUpperCase()}
                />
                <div className={styles.matchedPhoto}>
                    <Image src={matchPhoto} alt="Matched person photo" />
                </div>
                <MatchedMovie
                    side="right"
                    posterUrl={poster2.src}
                    role={"Shaun".toUpperCase()}
                    name={matchName.toUpperCase()}
                />
            </div>
            <div className={styles.splitLine}></div>
        </>
    );
}
