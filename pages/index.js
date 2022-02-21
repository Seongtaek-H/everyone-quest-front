import Main_logout from "../components/Main_logout.js";
import Main2_logout from "../components/Main2_logout.js";
import Main_login from "../components/Main_login.js";

export default function Home() {
  const login = false;
  console.log("Hi!");
  return (
    <div className="mainContainer">
      {login ? (
        <Main_login />
      ) : (
        <>
          <Main_logout />
          <Main2_logout />
        </>
      )}
      <style jsx>{`
        .mainContainer {
          display: flex;
          align-items: center;
          flex-direction: column;
          height
        }
      `}</style>
    </div>
  );
}
