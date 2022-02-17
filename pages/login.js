export default function Login() {
  return (
    <>
      <section className="login">
        <div className="sectionName">로그인</div>
        <div className="form">
          <form className="inputs">
            <input className="id input" placeholder="아이디" />
            <input className="pwd input" placeholder="비밀번호" />
            <button type="submit" className="login" value="로그인" />
            <button classsName="signUp" value="회원가입" />
          </form>
          <div className="find">아이디 / 비밀번호 찾기</div>
          <div className="login_API">
            <button className="login_google" value="구글 계정으로 로그인" />
            <button classsName="login_kakao" value="카카오 계정으로 로그인" />
          </div>
        </div>
      </section>
      <style jsx>{`
        .login {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .sectionName {
          font-size: 30px;
        }
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        inputs {
        }
        .input {
          width: 300px;
          height: 30px;
          margin: 15px;
          padding: 10px;
          background-color: gray;
          border: none;
          border-radius: 5px;
        }
        .id {
        }
        .pwd {
        }
      `}</style>
    </>
  );
}
