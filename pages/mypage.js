import { useState } from "react";
import Image from "next/image";
import { MyQuest, MyQuset } from "../components/MyQuest";
import Coupon from "../components/Coupon";

export default function MyPage(props) {
  const [myCoupone, setMyCoupone] = useState(0);
  const [myQuest, setMyQuest] = useState(0);
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? <Coupon modal={modal} setModal={setModal} /> : null}
      <div className="MainContainer">
        <header>마이페이지</header>
        <main>
          <div className="section_coupon">
            <div className="myCoupons coupon_item">
              <i className="fa-solid fa-ticket img_ticket"></i>

              <p>보유한 쿠폰</p>
              <div>{}장</div>
            </div>
            <div className="link-to-charge coupon_item">
              <p
                className="modalOpen"
                onClick={(e) => {
                  setModal(!modal);
                }}
              >
                충전하러 가기{" "}
                <span>
                  <i className="fa-solid fa-angle-right arrow"></i>
                </span>
              </p>
              <p>
                환전하기{" "}
                <span>
                  <i className="fa-solid fa-angle-right arrow"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="profile">
            <div className="profile_photo"></div>
            <p className="profile_name">반갑습니다. {}님</p>
          </div>

          <div className="myQuest">
            <div className="myQuest_tab">
              <tabs>
                <tab
                  type="button"
                  onClick={() => {
                    setMyQuest(0);
                  }}
                >
                  내가 요청한 퀘스트
                </tab>
                <tab
                  type="button"
                  onClick={() => {
                    setMyQuest(1);
                  }}
                >
                  진행중인 퀘스트
                </tab>
                <tab
                  type="button"
                  onClick={() => {
                    setMyQuest(2);
                  }}
                >
                  완료한 퀘스트
                </tab>
              </tabs>
            </div>
            <div className="myQuest_list">
              <MyQuest myQuest={myQuest} />
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
        .MainContainer {
          position: relative;
        }
        .section_coupon {
          display: flex;
          justify-content: flex-end;
          padding: 10px 20px 40px 20px;
          font-size: 20px;
          height: 25vh;
        }
        .coupon_item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 20vw;
          padding: 10px;
        }
        .link-to-charge {
          text-align: center;
          justify-content: center;
        }
        .myCoupons {
          align-items: center;
        }
        .img_ticket {
          font-size: 50px;
        }
        p {
          padding: 10px;
        }
        .arrow {
          border: 1px solid black;
          padding: 0px 5px;
          border-radius: 50%;
        }
        .modalOpen {
          cursor: pointer;
        }
        .profile {
          position: absolute;
          top: 20vh;
          left: 5vw;
          display: flex;
        }
        .profile_photo {
          border-radius: 50%;
          background-image: url("/images/profile.png");
          z-index: 0;
          background-size: contain;
          width: 200px;
          height: 200px;
        }

        .profile_name {
          padding: 40px 20px;
          font-size: 30px;
        }
        .myQuest {
          width: 100vw;
          height: 80vh;
          padding-top: 150px;
          background-color: white;
        }
        .myQuest_tab {
          display: flex;
          justify-content: center;
        }
        tabs {
          width: 55vw;
          display: flex;
          justify-content: space-between;
        }
        tab {
          width: 15vw;
          text-align: center;
          background: none;
          border: none;
          font-size: 25px;
          padding: 15px;
          border-radius: 5%;
        }
        tab:hover {
          background-color: #ffc0c0c0;
        }
        tab :focus {
          background-color: red;
        }
        .myQuest_list {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
