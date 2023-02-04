import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Acme Sprocket Co.</h1>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
