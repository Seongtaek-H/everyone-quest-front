import Image from "next/image";

export default function Join() {
  const auth = true;
  return (
    <>
      <div className="mainContainer">
        <header>회원가입</header>
        <main>
          <form>
            <div className="inputContainer">
              <span>아이디</span>
              <input className="userData" type="text" />
            </div>
            <div className="inputContainer">
              <span>비밀번호</span>
              <input className="userData" type="text" />
            </div>
            <div className="inputContainer">
              <span>이름</span>
              <input className="userData" type="text" />
            </div>
            <div className="inputContainer">
              <span>닉네임</span>
              <input className="userData" type="text" />
            </div>
            <div className="inputContainer">
              <span>휴대폰</span>
              <input className="userData" type="text" />
            </div>
            {!auth ? (
              <span className="auth no">
                인증이 필요합니다. <i className="fa-solid fa-circle-xmark"></i>
              </span>
            ) : (
              <span className="auth ok">
                인증이 완료되었습니다.{" "}
                <i className="fa-solid fa-circle-check"></i>
              </span>
            )}
            <button className="join">회원가입</button>
            <button className="joinGoogle" type="button">
              <Image
                src="/images/google.png"
                alt="googleLogo"
                width="25"
                height="25"
              />
              &nbsp;구글 계정으로 회원가입
            </button>
            <button className="joinKakao" type="button">
              <Image
                src="/images/kakao-talk.png"
                alt="googleLogo"
                width="25"
                height="25"
              />
              &nbsp;카카오 계정으로 회원가입
            </button>
          </form>
        </main>

        <style jsx>{`
          .mainContainer {
            height: 100%;
            display: grid;
            grid-template-rows: 1fr 9fr;
            font-weight: 900;
            font-size: 20px;
          }

          header {
            font-size: 40px;
            padding: 20px;
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

          .inputContainer {
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: 1fr 3fr;
            background-color: rgba(189, 189, 189, 0.3);
            width: 400px;
            height: 35px;
            align-items: center;
            padding: 10px;
            border-radius: 15px;
            margin-bottom: 30px;
          }

          .userData {
            border: none;
            background-color: transparent;
            height: 100%;
            width: 100%;
          }

          .userData:focus {
            outline: none;
          }

          .auth {
            margin-bottom: 30px;
          }

          .no {
            color: red;
          }

          .ok {
            color: green;
          }

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 55px;
            color: white;
            width: 420px;
            border-radius: 10px;
            margin-bottom: 30px;
            border: none;
            cursor: pointer;
            font-weight: 700;
            font-size: 20px;
          }

          .join {
            background-color: #368df6;
          }

          .joinGoogle {
            background-color: #4a3436;
          }

          .joinKakao {
            background-color: #f3cc30;
          }
        `}</style>
      </div>
    </>
  );
}
