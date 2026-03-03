import TestClassComponent from "./TestClassComponent";
import TestComponent from "./TestFunction";
import "./index.css";

function App() {
  let test=prompt('How old are you?')
  return (
    <div>
      <h1 className="main-heading">My Test Project</h1>
{test >= 18 ? <TestComponent /> : <TestClassComponent />}

    </div>
  );
}

export default App;

