'use client';

import Image from "next/image";
import styles from "./uikit.module.sass";
import { Quicksand } from 'next/font/google'
import { useState } from "react";

const quicksand = Quicksand({ weight: "400", subsets: ['latin'] })

export default function Search() {
    const [searchString, setSearchString] = useState("")
    return (
        <input type="text" placeholder="Start typing..." value={searchString} onChange={(e) => setSearchString(e.target.value)} className={`${styles.searchInput} ${quicksand.className}`}/>
    );
}
