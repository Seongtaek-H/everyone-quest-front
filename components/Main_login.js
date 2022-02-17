import Image from "next/image";
import styles from "./componentsCss/Main.module.css";
import { useState } from "react";

export default function Main_login() {
  const [toggle, setToggle] = useState(false);
  const [criteria, setCriteria] = useState("원하는 기준을 선택해주세요.");
  const toggleClass = () => {
    setToggle((prev) => !prev);
  };
  const selectCriteria = (e) => {
    let selection = e.target.value;
    setCriteria(selection);
    setToggle((prev) => !prev);
  };

  return (
    <div className="mainContainer">
      <header>
        <div className="location">서초동</div>
        <div className="reqBtn">
          <button>퀘스트 요청</button>
        </div>
        <div className="questCnt">
          아직 깨지못한 퀘스트가
          <br />
          <br />
          219개 있습니다.
        </div>
        <div className="filter">
          <div className="select-box">
            <div
              className={
                toggle ? "options-container active" : "options-container"
              }
            >
              <div className="option">
                <input
                  type="radio"
                  className="radio"
                  id="거리순"
                  name="filter"
                  value="거리순으로 정렬"
                  onClick={selectCriteria}
                />
                <label htmlFor="거리순">거리순으로 정렬</label>
              </div>
              <div className="option">
                <input
                  type="radio"
                  className="radio"
                  id="시간순"
                  name="filter"
                  value="시간순으로 정렬"
                  onClick={selectCriteria}
                />
                <label htmlFor="시간순">시간순으로 정렬</label>
              </div>
            </div>
            <div className="selected" onClick={toggleClass}>
              {criteria}
            </div>
          </div>
        </div>
      </header>
      <main></main>
      <style jsx>{`
        .mainContainer {
          display: grid;
          grid-template-rows: 2fr 3fr;
          width: 800px;
          height: 100vh;
          background-color: white;
        }

        header {
          display: grid;
          width: 800px;
          height: 400px;
          position: fixed;
          border-bottom: 1px solid black;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
        }

        header div {
          padding: 10px;
        }

        .location,
        .reqBtn,
        .questCnt,
        .filter {
          display: flex;
        }

        .location,
        .questCnt {
          justify-content: center;
        }

        .location,
        .reqBtn {
          font-size: 50px;
          align-items: center;
        }

        .reqBtn {
          width: 100%;
        }

        .reqBtn button {
          margin-left: 10px;
          width: 320px;
          height: 140px;
          font-size: 40px;
          padding: 10px;
          border: none;
          border-radius: 15px;
          color: white;
          background-color: #ff7761;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          font-family: "Noto Sans KR", sans-serif;
        }

        .reqBtn button:hover {
          opacity: 0.7;
          transition: all 0.3s ease-in-out;
        }

        .questCnt {
          font-size: 25px;
        }

        .select-box {
          display: flex;
          flex-direction: column;
          width: 300px;
        }

        .select-box .options-container {
          width: 100%;
          transition: all 0.4s;
          border-radius: 8px;
          max-height: 0;
          opacity: 0;
          order: 1;
          border: 1px solid black;
        }

        .selected {
          width: 100%;
          border-radius: 8px;
          position: relative;
          margin-bottom: 8px;

          order: 0;
        }

        .selected::after {
          content: "";
          background: url("images/arrow-down.png");
          background-size: contain;
          background-repeat: no-repeat;

          position: absolute;
          width: 20px;
          height: 100%;
          right: 13px;
          top: 8px;

          transition: all 0.4s;
        }

        .select-box .options-container.active {
          max-height: 100px;
          opacity: 1;
        }

        .select-box .options-container.active + .selected::after {
          transform: rotateX(180deg);
          top: -8px;
        }

        .select-box .option,
        .selected {
          padding: 12px 24px;
          cursor: pointer;
        }

        .select-box .option:hover {
          background: rgba(189, 189, 189, 0.4);
          border-radius: 8px;
        }

        .select-box label {
          cursor: pointer;
        }

        .select-box .option .radio {
          display: none;
        }
      `}</style>
    </div>
  );
}
