export default function Coupon(props) {
  const turn = () => {
    props.setModal(!props.modal);
  };
  console.log(props.modal);
  return (
    <div className="coupon">
      <div
        className="background"
        onClick={() => {
          turn();
        }}
      ></div>
      <div className="modal">
        <div className="modal_title">쿠폰 충전하기</div>
        <div className="modal_section">
          <div>쿠폰 1장</div>
          <div>
            <button className="modal_button">1,200원</button>
          </div>
        </div>
        <div className="modal_section">
          <div>쿠폰 10장</div>
          <div>
            <button className="modal_button">10,000원</button>
          </div>
        </div>
        <div className="modal_section">
          <div>쿠폰 50장</div>
          <div>
            <button className="modal_button">45,000원</button>
          </div>
        </div>
        <div className="modal_section">
          <div>쿠폰 100장</div>
          <div>
            <button className="modal_button">85,000원</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .coupon {
          display: block;
        }
        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: black;
          z-index: 3;
          opacity: 0.5;
        }

        .modal {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          top: 10%;
          left: 25%;
          width: 50%;
          height: 80%;
          font-size: 30px;
          background-color: #d7d7d7;
          opacity: 1;
          z-index: 5;
        }
        .modal_title {
          padding-bottom: 20px;
        }
        .modal_section {
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 85%;
          height: 15%;
          padding: 10px 20px;
          margin: 10px;
        }
        .modal_button {
          color: white;
          width: 180px;
          font-size: 25px;
          padding: 20px;
          background-color: rgb(19, 63, 145);
        }
      `}</style>
    </div>
  );
}
