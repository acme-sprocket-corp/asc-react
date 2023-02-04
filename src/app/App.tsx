import { Outlet } from "react-router-dom";
import { TitleSize, Title } from "../common";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Title titleSize={TitleSize.One} title="Acme Sprocket Co." />
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
