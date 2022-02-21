import Image from "next/image";

export default function Main2_logout() {
  return (
    <div className="mainContainer">
      <section className="sec1">
        <Image src="/images/shoes.jpg" alt="moving" width="500px" height="600px"/>
      </section>
      <section className="sec2">
        <span >
          모두의 퀘스트는?
        </span>
        <p className="desc">
          모두의 퀘스트에서는 누구나 퀘스트를 만들 수 있습니다. 
          <br />
          모두의 퀘스트
          <br />
          모두의 퀘스트는 이러저러한 서비스입니다.
          <br />
          모두의 퀘스트는 이러저러한 서비스입니다.
          <br />
          지금 바로 모두와 함께 퀘스트를 해결해보세요.
        </p>
        <a href="/join"><button type="button">가입하기</button></a>
      </section>
      <style jsx>{`
        .mainContainer {
          background-color: white;
          display: grid;
          height: 100vh;
          width: 100%;
          grid-template-columns: repeat(2, minmax(max-content, 1fr));
          align-items: center;
        }
        
        .sec1 {
          padding-left: 180px;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .sec2 {
          color: #ff7761;
        }

        span {
          display: inline-block;
          font-size: 55px;
          margin-bottom: 55px;
          font-weight: 800;
        }

        .desc {
          font-size: 25px;
          font-weight: 100;
        }

        button {
          width: 200px;
          font-size: 15px;
          padding: 20px;
          border: none;
          background: black;
          color: white;
          margin-top: 50px;
          cursor: pointer;
          transition: all 0.4s ease-in-out;

        }

        button:hover {
          background: #ff7761;
          transition: all 0.4s ease-in-out;
        }

        a{
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: white;
        }
        
      `}</style>
    </div>
  );
}
