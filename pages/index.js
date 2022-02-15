import Main from "../components/Main.js";

export default function Home() {
  const login = true;
  return (
    <div className="mainContainer">
      <Main login={login}/>
      <style jsx>{`
        .mainContainer {
          display: grid;
          height: 100%;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
