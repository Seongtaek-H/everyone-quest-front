import Image from "next/image";

export default function Main() {
  return (
    <>
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
      <section className="mainPhoto"></section>
      <style jsx>{`
        .mainText {
          display: grid;
          height: 30vh;
          grid-template-rows: 2fr 1fr;
          grid-template-columns: max-content;
          margin-left: 5vh;
        }

        .mainText p:nth-child(1) {
          font-size: 60px;
        }

        .mainText p:nth-child(2) {
          font-size: 30px;
        }

        .mainPhoto {
          padding-left: 200px;
        }

        .photoContainer {
          background-color: red;
          width: 500px;
          height: 350px;
          box-shadow: -2px 2px 15px;
        }

        .over {
          position: absolute;
          top: 200px;
          right: 200px;
        }
      `}</style>
    </>
  );
}
