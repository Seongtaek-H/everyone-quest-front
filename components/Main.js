
export default function Main({login}) {
  return (
    <>
      <section className="mainText">
        <p>
          혼자서는 힘든 일<br />
          함께 해봐요.
        </p>
        <p>
          간단한 정리부터 이삿짐 옮기기까지,<br />
          어려운 일도 함께라면 쉬울 거에요.
        </p>
      </section>
      <section className="mainPhoto">
      섹션2
      </section>
      <style jsx>{`
        .mainText {
          display: grid;
          grid-template-rows: 2fr 1fr;
        }
      `}</style>
    </>
  );
}
