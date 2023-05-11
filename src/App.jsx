import "./App.css";
import CoffeeContainer from "./components/CoffeeContainer";

function App() {
  return (
    <div className="flex justify-center">
      <div className="flex  justify-center flex-col items-center">
        <h1 className="text-purple-500 text-6xl">Hot Hot Cold Coffee:</h1>
        <CoffeeContainer></CoffeeContainer>
      </div>
    </div>
  );
}

export default App;
