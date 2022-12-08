import "./App.css";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";

function App() {
  return (
    <div
      className={
        "bg flex h-screen w-screen items-center justify-center gap-5 bg-sky-50"
      }
    >
      <CurrentWeather />
    </div>
  );
}

export default App;
