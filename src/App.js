import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HabitListingPage } from "./pages/habitListingPage/HabitListingPage";
import { ArchivePage } from "./pages/archivePage/ArchivePage";

function App() {
  return (
    <>
      <div className="App">
        <h1 className="app-heading">Habit Tracker</h1>
      </div>

      <Routes>
        <Route path="/" element={<HabitListingPage/>} />
        <Route path="/archive" element={<ArchivePage/>} />
      </Routes>

    </>
  );
}

export default App;
