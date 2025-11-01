import styles from "../styles/form.module.css";
import { useEffect, useState } from "react";

function SetMatchForm() {
  const [matchInfo, setMatchInfo] = useState({
    teamName: "",
    date: "",
    ratio: "",
    time: "",
    location: "",
    registerName: "",
  });

  useEffect(() => {
    console.log(matchInfo);
  }, [matchInfo]);
    
  return (
    <form id={styles["main-form"]}>
      <input
        type="text"
        id={styles["registerName"]}
        placeholder="Tên của bạn"
        value={matchInfo.registerName}
        onChange={(e) =>
          setMatchInfo({ ...matchInfo, registerName: e.target.value })
        }
      />

      <input
        type="text"
        id={styles["teamName"]}
        placeholder="Tên lớp bạn"
        value={matchInfo.teamName}
        onChange={(e) =>
          setMatchInfo({ ...matchInfo, teamName: e.target.value })
        }
      />

      <input
        type="text"
        id={styles["date"]}
        placeholder="Ngày nào đá?"
        value={matchInfo.date || ""}
        onChange={(e) => setMatchInfo({ ...matchInfo, date: e.target.value })}
      />

      <h2>Chia tiền</h2>
      <div className={styles["radio-input-group"]}>
        <div>
          <input
            type="radio"
            value="7/3"
            id="7/3"
            name="ratio"
            onChange={(e) =>
              setMatchInfo({ ...matchInfo, ratio: e.target.value })
            }
          />

          <label
            htmlFor="7/3"
          >
            7/3
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="5/5"
            id="5/5"
            name="ratio"
            onChange={(e) =>
              setMatchInfo({ ...matchInfo, ratio: e.target.value })
            }
          />

          <label
            htmlFor="5/5"
          >
            5/5
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="full"
            id="full"
            name="ratio"
            onChange={(e) =>
              setMatchInfo({ ...matchInfo, ratio: e.target.value })
            }
          />
          
          <label
            htmlFor="full"
          >
            Full sân
          </label>
        </div>
      </div>
    </form>
  );
}

export default SetMatchForm;
