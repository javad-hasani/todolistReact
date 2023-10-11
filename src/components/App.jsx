import DetailsBar from "./DetailsBar";
import Filter from "./Filter";
import Header from "./Header";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import { useWidnowSize } from "../hooks/useWindowSize";
import Attribution from "./Attribution";

function App() {
  const isMobile = useWidnowSize();

  return (
    <>
      <main>
        <h1 className="sr-only">برنامه لیست کارها با React</h1>
        <div className="background"></div>
        <div className="topContainer">
          <Header />
          <InputBar />
          <div className="todoTopContainer">
            <TodoList />
            <DetailsBar />
          </div>

          {!isMobile && <Filter isMobile={!isMobile} />}
        </div>
      </main>

      <Attribution />
    </>
  );
}

export default App;
