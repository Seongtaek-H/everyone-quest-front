import Image from "next/image";

export default function QuestList() {
  return (
    <div className="mainContainer">
      <section className="imgSec">
      </section>
      <section className="textSec">
        <div className="questTitle">물 사다주세요!</div>
        <div className="questTime">사당1동 5시간 전</div>
        <div className="questCoupon">쿠폰 1장</div>
      </section>
      <style jsx>{`
        .mainContainer {
          display: grid;
          grid-template-columns: 3fr 2fr;
          grid-auto-flow: column;
          width: 100%;
          height: 50vh;
          padding: 20px;
        }

        .imgSec{
          background: url("/images/dog.jpg");
          background-size: contain;
        }

        .textSec {
          padding-left: 20px;
          font-size: 25px;
        }

        .textSec div {
          margin-bottom: 10px;
        }

        .questTitle {
          font-size: 30px;
        }

        .questTime {
          color: #C4C4C4;
        }
        `}</style>
    </div>
  );
}
