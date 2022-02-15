import Main from "../components/Main.js";

export default function Home() {
  const login = true;
  return (
    <div className="mainContainer">
      <Main />
      <style jsx>{`
        .mainContainer {
          display: grid;
          height: 100%;
          grid-template-columns: minmax(max-content, 1fr) minmax(
              max-content,
              2fr
            );
          align-items: center;
        }
      `}</style>
    </div>
  );
}
