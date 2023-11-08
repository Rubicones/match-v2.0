import Image from "next/image";
import styles from "./page.module.sass";
import Search from "@/uikit/search";
import MovieCard from "@/uikit/movieCard";
import Switch from "@/uikit/switch";

export default function Home() {
    return (
        <div className={styles.content}>
            <Search />
            <MovieCard />
            <Switch />
        </div>
    );
}
