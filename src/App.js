import "./styles.css";
import { DataList } from "./MyContext";
import Form from "./Form";
import ToDoList from "./ToDoList";
export default function App() {
  return (
    <div className="App">
      <DataList>
        <Form />
        <ToDoList />
      </DataList>
    </div>
  );
}
