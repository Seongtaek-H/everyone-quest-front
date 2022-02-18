import { useState } from "react";

export default function MyPage() {
  const [myCoupone, setMyCoupone] = useState(0);
  const [myQuest, setMyQuest] = useState();
  return (
    <>
      <div className="MainContainer">
        <header>마이페이지</header>
        <main>
          <div className="coupon">
            <div className="myCoupons coupon_item">
              <i className="fa-solid fa-ticket-simple img_ticket"></i>
              <p>보유한 쿠폰</p>
              <div>{}장</div>
            </div>
            <div className="menu coupon_item">
              <p>
                충전하러 가기{" "}
                <span>
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </span>
              </p>
              <p>
                환전하기{" "}
                <span>
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="profile">
            <div className="profile_photo">
              <img src=""></img>
            </div>
            <div>반가워요. {}님</div>
          </div>
          <div className="myQuest"></div>
        </main>
      </div>
      <style jsx>{`
        .coupon {
          display: flex;
          justify-content: flex-end;
          font-size: 20px;
        }
        .coupon_item {
          display: flex;
          flex-direction: column;
          width: 20vw;
          padding: 10px;
        }
        .myCoupons {
          align-items: center;
        }
        .img_ticket {
          font-size: 50px;
        }
        p {
          padding: 5px;
        }
        .menu {
          justify-content: flex-end;
        }
        .myQuest {
          background-color: whitesmoke;
        }
      `}</style>
    </>
  );
}
