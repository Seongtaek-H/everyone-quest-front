import Image from "next/image";
import styles from "./componentsCss/Main.module.css";

export default function Main_logout() {
  return (
    <div className="mainContainer">
      <section className="mainText">
        <p>
          혼자서는 힘든 일<br />
          함께 해봐요.
        </p>
        <p>
          간단한 정리부터 이삿짐 옮기기까지,
          <br />
          어려운 일도 함께라면 쉬울 거에요.
        </p>
      </section>
      <section className="mainPhoto">
        <Image
          className={styles.photo}
          src="/images/moving.jpg"
          alt="moving"
          width="700px"
          height="350px"
        />
      </section>
      <style jsx>{`
        .mainContainer {
          display: grid;
          width: 100%;
          height: 90vh;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }

        .mainText {
          display: grid;
          grid-template-columns: max-content;
          margin-left: 50px;
        }

        .mainText p:nth-child(1) {
          font-size: 60px;
          margin-bottom: 40px;
        }

        .mainText p:nth-child(2) {
          font-size: 30px;
        }

        .mainPhoto {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
