import { useRouter } from 'next/router'

export default function detail () {
  const router = useRouter()
  const { num } = router.query
  const questAccpet = () => {
    console.log("db의 퀘스트로 수락 전송");
}

return (
    <div className="mainContainer">
        <main>
        <section className="photoSec">
            <div className="photoContainer"></div>
        </section>
        <section className="userSec">
            <div className="userPhoto"></div>
            <div className="userDesc">
                <div className="userName">홍길동</div>
                <div className="userAddress">서울시 강남구</div>
            </div>
        </section>
        <section className="summarySec">
            <div className="title">물 사다주세요!</div>
            <div className="coupon">쿠폰 10장</div>
        </section>
        <section className="descSec">
            어쩌구저쩌구
            어쩌구저쩌구
            어쩌구저쩌구
            어쩌구저쩌구
        </section>
        <button type="button" onClick={questAccpet}>퀘스트 수락</button>
        </main>
        <style jsx>{`
            .mainContainer {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 80%;
                background-color: white;
                padding: 20px;
            }
            section {
                margin: 0 0 50px 0;
            }

            .photoSec {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .photoContainer {
                width: 700px;
                height: 600px;
                background-color: blue;
            }
            .userPhoto {
                background: url("/images/profile.png");
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-size: cover;
            }
            .userSec {
                width: 60%;
                display: flex;
                font-size: 30px;
                
            }

            .userDesc {
                padding-left: 20px;
            }

            .userAddress {
                padding-top: 10px;
                font-size: 20px;
            }
            .summarySec {
                width: 60%;
                font-size: 40px;
            }
            .coupon {
                padding-top: 10px;
                font-size: 30px;
            }
            .descSec {
                padding: 10px;
                width: 60%;

            }

            button {
            width: 60%;
            height: 140px;
            font-size: 40px;
            border: none;
            color: white;
            background-color: #ff7761;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            font-family: "Noto Sans KR", sans-serif;
            }

            button:hover {
            background: black;
            transition: all 0.4s ease-in-out;
            }
            }
        `}</style>
    </div>
    );
          }