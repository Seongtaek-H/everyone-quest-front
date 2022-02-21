export default function Main_logout() {
  return (
    <div className="mainContainer">
      <div className="mainText">
        <p>
          혼자서는 힘든 일<br />
          함께 해봐요.
        </p>
        <p>
          간단한 정리부터 이삿짐 옮기기까지,
          <br />
          어려운 일도 함께라면 쉬울 거에요.
        </p>
      </div>

      <style jsx>{`
        .mainContainer {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("images/moving.jpg");
          background-size: cover;
          background-position: 30%;
          color: white;
          background-attachment: fixed;

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
          font-weight: 100;
        }
      `}</style>
    </div>
  );
}
