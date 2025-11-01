import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className={styles["container"]}>

                <div className={styles["hero-content"]}>
                    {/* Hero content here*/}
                    <h1 className={styles["hero-header"]}>9A1</h1>
                    <div className={styles["desc"]}>
                        <h2>Trang web chính thức của lớp 9A1</h2>
                        <p>Liên lạc - Lên kèo - Lưu giữ kỉ niệm</p>
                    </div>
                </div>

                <div className={styles["features"]}>
                    <h2>Tính năng</h2>
                    <div id={styles["set-football-match"]}>
                        <div className={styles["feature-title"]}>
                            <h2>Lên kèo đá banh</h2>
                            <p className={styles["feature-desc"]}>Lên kèo mọi lúc - Thi đấu mọi nơi</p>
                            <Link to="/set-match" className={styles["feature-link"]}>Click vào link này để lên kèo ngay</Link>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}


export default Home;