import "./App.css";
import Form from "./Pages/Form/Form";
import Table from "./Pages/Table/Table";

function App() {
  return (
    <div
      className="pb-80"
      style={{
        background: `url("https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png")`,
      }}
    >
      <Form />
      <Table />
    </div>
  );
}

export default App;
