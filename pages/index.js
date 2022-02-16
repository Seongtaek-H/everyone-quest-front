import Main from "../components/Main.js";
import Main2 from "../components/Main2.js";

export default function Home() {
  const login = true;
  return (
    <div className="mainContainer">
      <Main />
      <Main2 />
      <style jsx>{`
        .mainContainer {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
