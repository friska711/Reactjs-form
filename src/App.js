
import './App.css';
import { FormCarControlled, FormCarUncontrolled } from './components/FormCar';
function App() {
  return (
    <div className="App">
      <FormCarUncontrolled/>
      <FormCarControlled/>
    </div>
  );
}

export default App;
