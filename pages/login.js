export default function Login() {
  return (
    <>
      <div className="mainContainer">
        <header>로그인</header>
        <main>
          <form>
            <input className="input" placeholder="아이디" />
            <input className="input" placeholder="비밀번호" />
            <button type="submit" className="login" value="로그인" />
            <button classsName="signUp" value="회원가입" />

            <div className="find">아이디 / 비밀번호 찾기</div>

            <button
              className="login_google"
              value="구글 계정으로 로그인"
            ></button>
            <button classsName="login_kakao" value="카카오 계정으로 로그인" />
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
      `}</style>
    </>
  );
}
