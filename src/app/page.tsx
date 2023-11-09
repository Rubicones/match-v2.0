import Image from "next/image";
import styles from "./page.module.sass";
import Search from "@/uikit/search";
import MovieCard from "@/uikit/movieCard";
import Switch from "@/uikit/switch";
import MatchToken from "@/uikit/matchToken";

export default function Home() {
    return (
        <div className={styles.content}>
            <Search />
            <MovieCard />
            <Switch />
            <MatchToken />
        </div>
    );
}
