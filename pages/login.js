import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="mainContainer">
        <header>로그인</header>
        <main>
          <form>
            <input className="input" placeholder="아이디" />
            <input className="input" placeholder="비밀번호" />
            <div className="find">아이디 / 비밀번호 찾기</div>
            <button type="submit" className="login">
              로그인
            </button>
            <button className="sign">회원가입</button>

            <button className="login_google">
              <Image
                src="/images/google.png"
                alt="googleLogo"
                width="25"
                height="25"
              />
              &nbsp;구글 계정으로 로그인
            </button>
            <button className="login_kakao">
              <Image
                src="/images/kakao-talk.png"
                alt="googleLogo"
                width="25"
                height="25"
              />
              &nbsp;카카오 계정으로 로그인
            </button>
          </form>
        </main>
      </div>
      <style jsx>{`
        .mainContainer {
          height: 100%;
          display: grid;
          grid-template-rows: 1fr 9fr;
        }
        main {
          display: flex;
          justify-content: center;
        }
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        input {
          width: 400px;
          height: 35px;
          border-radius: 10px;
          background-color: rgba(189, 189, 189, 0.3);
          padding: 10px;
          margin: 20px;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 55px;
          width: 420px;
          border-radius: 10px;
          margin-bottom: 30px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 20px;
          color: white;
        }
        .find {
          width: 100%;
          text-align: right;
          padding-right: 50px;
          padding-bottom: 50px;
          align-items: top;
        }
        .login {
          background-color: #368df6;
        }
        .sign {
          color: black;
        }
        .login_google {
          background-color: #4a3436;
        }
        .login_kakao {
          background-color: #f3cc30;
        }
      `}</style>
    </>
  );
}
