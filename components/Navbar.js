import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div className="nav">
        <div className="logo">모두의 퀘스트</div>
        <div className="side-btn logout">
          <a href="#">홈</a>
          <a href="#">로그인</a>
          <a href="/join">회원가입</a>
        </div>
        <div className="side-btn login">
          <a href="#">홈</a>
          <a href="#">마이페이지</a>
          <a href="#">충전페이지</a>
        </div>
        <div className="search">
          <input type="text" placeholder="깨고 싶은 퀘스트명을 검색해보세요!" />
          <div>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
        </div>
      </div>
      <style jsx>{`
        .logo {
          text-align: center;
          padding: 20px;
          font-size: 20px;
          font-weight: 900;
          height: 100%;
          color: white;
          background-color: #ff7761;
        }

        .nav {
          position: fixed;
          width: 100%;
          z-index: 2;
          display: grid;
          grid-template-columns: 10% 70% 20%;
          justify-content: space-between;
          align-items: center;
          background-color: white;
          
        }

        input {
          width: 100%;
          text-align: center;
          border: none;
        }

        input:focus {
          outline: none;
        }

        .search {
          border: solid 1px black;
          display: flex;
          padding: 10px;
          margin-right: 20px;
        }

        .side-btn {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          font-weight: 900;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .login {
          display: none;
        }
      `}</style>
    </>
  );
}
