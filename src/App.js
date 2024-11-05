import { Routes, Route } from "react-router-dom";
import LoginFormPage from "./pages/LoginFormPage";

function App() {
  return (
    <div className="bg-radial-gradient  h-screen">
      <Routes>
        <Route path="/" element={<LoginFormPage />} />
      </Routes>
    </div>
  );
}

export default App;
