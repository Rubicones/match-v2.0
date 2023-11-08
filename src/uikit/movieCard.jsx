"use client";

import Image from "next/image";
import styles from "./uikit.module.sass";
import { Quicksand } from "next/font/google";
import clapper from "../../public/clapper.svg";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const quicksandLight = Quicksand({ weight: "300", subsets: ["latin"] });

const SearchToken = ({ title, director, state, id, onSelect }) => {
    const [anim, setAnim] = useState(false)

    useEffect(() => {
        if (state === 1)
            setAnim(true)
        else if (state === 0 || state === 2)
            setAnim(false)
    }, [state])

    useEffect(() => {
        state === 2 && setAnim(true)
    }, [anim])

    return (
        <CSSTransition
            in={anim}
            timeout={{ enter: 500, exit: 0 }}
            classNames={{
                enterActive: styles.opaActive,
                enterDone: state === 2 ? styles.opaBlinkingActive : styles.opaDone,
                exitActive: styles.opaDone,
                exitDone: styles.opaExitActive,
            }}
        >
            <div className={styles.tokenContainer} onClick={() => state === 1 && onSelect(id)}>
                <div className={styles.textContainer}>
                    <span
                        className={styles.title}
                        title={
                            title.toUpperCase() +
                            "  " +
                            "DIR. " +
                            director.toUpperCase()
                        }
                    >
                        {title.length < 24
                            ? title.toUpperCase()
                            : title.toUpperCase().slice(0, 23) + "..."}
                    </span>
                    <span
                        className={`${styles.director} ${quicksandLight.className}`}
                        title={
                            title.toUpperCase() +
                            "  " +
                            "DIR. " +
                            director.toUpperCase()
                        }
                    >
                        {title.length < 22 && "DIR. " + director.toUpperCase()}
                    </span>
                </div>

                <div className={styles.splitLine}></div>
            </div>
        </CSSTransition>
    );
};

export default function MovieCard() {
    const [searchTokens, setSearchTokens] = useState([]);
    const [state, setState] = useState(0); //0 -- no search, 1 -- search active, 2 -- poster is set
    const [tokenAnimation, setTokenAnimation] = useState(0); // 1 -- enter anim, 0 -- exit anim, 2 -- blink anim
    const [selectedToken, setSelectedToken] = useState(-1); // -1 -- not selected, n - selected token id
    const rawMovies = new Array(12).fill({
        title: "baby driver",
        director: "Edgar Wright",
    });

    useEffect(() => {
        if (selectedToken === -1) {
            setSearchTokens(
                rawMovies.map((movie, i) => (
                    <SearchToken
                        title={movie.title}
                        director={movie.director}
                        key={i}
                        id={i}
                        onSelect={(id) => setSelectedToken(id)}
                        state={tokenAnimation}
                    />
                ))
            );
        } else {
            setSearchTokens(
                rawMovies.map((movie, i) => (
                    <SearchToken
                        title={movie.title}
                        director={movie.director}
                        key={i}
                        id={i}
                        onSelect={(id) => setSelectedToken(id)}
                        state={i === selectedToken ? 2 : 0}
                    />
                ))
            );
        }
    }, [tokenAnimation, selectedToken]);

    return (
        <div
            className={styles.movieCardContainer}
            onClick={() => {
                if (state === 0) {
                    setTokenAnimation(1);
                    setState(1);
                } else if (state === 1) {
                    setTokenAnimation(0);
                }
            }}
        >
            {state === 0 && <Image src={clapper} alt="movie clapper" />}
            {state === 1 && (
                <div className={styles.searchPanel} style={selectedToken !== -1 ? {overflow: "hidden"} : {}}>{searchTokens}</div>
            )}
        </div>
    );
}
