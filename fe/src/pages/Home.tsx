import styles from "../styles/home.module.css";

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

            </div>
        </>
    )
}


export default Home;