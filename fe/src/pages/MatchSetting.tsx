import SetMatchForm from "../components/SetMatchForm.tsx";
import styles from "../styles/setMatchPage.module.css";


function MatchSetting()
{

    return (
        <>
        <div className={styles["title-container"]}>
            <h1 className={styles["main-title"]}>Lên kèo đá banh</h1>
            <p className={styles["subtitle"]}>Điền thông tin bên dưới để lên kèo ngay nào!</p>
        </div>

        <SetMatchForm />

        <footer>
            chan trang
        </footer>
        </>
    )
}

export default MatchSetting;