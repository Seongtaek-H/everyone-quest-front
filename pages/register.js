import { useState } from "react";

export default function register () {
  const [coupon, setCoupon] = useState(0);
  const minus = () => {
    if(coupon==0) {
    } else{
        setCoupon((prev)=>(prev)-1);
    }
  }
  const add = () => {
      setCoupon((prev)=>(prev)+1);
  }
  const questRegister = () => {
    console.log("db로 퀘스트 정보 전송");
}

return (
    <div className="mainContainer">
            <form>
                <section className="photoSec">
                <div className="photoContainer">
                    
                </div>
                <div className='photoNcoupon'>
                    <div>
                    <label className="photoUpload" htmlFor="photoUpload">사진 첨부하기</label>
                    <input id="photoUpload" style={{display: "none"}} type="file" />
                    </div>  
                    <div className="couponCntContianer">
                        <span>쿠폰 개수</span>
                        <button type="button" onClick={minus}>-</button>
                        <span className="couponCnt">{coupon}</span>
                        <button type="button" onClick={add}>+</button>

                    </div>
                </div>
                </section>
                <section className="summarySec">
                    <span className="title">제목</span>
                    <input type="text" placeholder="제목을 입력해주세요."/>
                </section>
                <section className="descSec">
                    <textarea placeholder="내용을 입력해주세요."></textarea>
                </section>
                <button className="registerBtn" type="submit" onClick={questRegister}>퀘스트 등록</button>
            </form>
        <style jsx>{`
            .mainContainer {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            form {
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
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 60%;

            }
            
            .photoUpload {
                cursor: pointer;
            }
            .photoContainer {
                width: 700px;
                height: 600px;
                background-color: blue;
            }

            .photoNcoupon {
                margin-top: 20px;
                width: 700px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .photoNcoupon span {
                padding: 0 10px;
            }

            .couponCntContianer {
                display: flex;
                align-items: center;
                height: 50px;
            }

            .couponCnt {
                text-align: center;
                width: 50px;
            }


            .summarySec {
                width: 60%;
                font-size: 40px;
            }

            .summarySec input {
                width: 60%;
                height: 100%;
                font-size: 20px;
                margin-left: 10px;
                border: none;
                font-family: "Noto Sans KR", sans-serif;
            }

            .summarySec input:focus {
                outline: none;
            }

            .summarySec input::placeholder, textarea::placeholder {
                font-size: 20px;
                font-family: "Noto Sans KR", sans-serif;
            }

            .descSec {
                width: 60%;

            }

            textarea {
                width: 100%;
                height: 100%;
                resize: none;
                border: none;
                font-size: 20px;
                font-family: "Noto Sans KR", sans-serif;

            }

            textarea:focus {
                outline: none;

            }

            .registerBtn, .photoNcoupon button {
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

            .registerBtn:hover {
            background: black;
            transition: all 0.4s ease-in-out;
            }

            .photoNcoupon button {
                transition: none;
                width: 40px;
                height: 40px;
                font-size: 20px;
            }

            .photoNcoupon button:hover {
                height: 40px;
                font-size: 25px;
            }
            
            }
        `}</style>
    </div>
    );
          }