import Image from "next/image";
import styles from "./componentsCss/Main.module.css";

export default function Main2() {
  return (
    <div className="mainContainer">
      <section className="mainText">
        <p>
          새로운 멘트<br />
          필요하다.
        </p>
        <p>
          공동체를 강조하는
          <br />
          그런 멘트라면 참 좋을 거 같다는 생각이 든다.
        </p>
      </section>
      <section className="mainPhoto">
        <Image className={styles.photo} src="/images/moving.jpg" alt="moving" width="700px" height="350px"/>
      </section>
      <style jsx>{`
        .mainContainer {
          background-color: #FAC8BF;
          display: grid;
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
