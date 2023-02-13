import { Outlet } from "react-router-dom";
import { TitleSize, Title } from "../common";
import applicationReducer from "../stores/reducer/ApplicationReducer";
import { defaultApplicationState } from "../stores/state/ApplicationState";
import { ApplicationContext } from "../stores/store/ApplicationStore";
import useCreateStore from "../hooks/use-create-store/UseCreateStore";

const App: React.FC = () => {
  const store = useCreateStore(defaultApplicationState(), applicationReducer);

  return (
    <ApplicationContext.Provider value={store}>
      <header>
        <nav>
          <Title titleSize={TitleSize.One} title="Acme Sprocket Co." />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ApplicationContext.Provider>
  );
};

export default App;
