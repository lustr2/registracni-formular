import { Registration } from "./components/Registration";

export const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
      </header>
      <main>
        <center><h3>REGISTRATION</h3></center>
          <Registration />
      </main>
    </div>
  );
};

export default App;
