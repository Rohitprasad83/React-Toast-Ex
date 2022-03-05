import { useState } from "react";
import "./styles.css";

const Toast = ({ type }) => {
  const [Toast, setToast] = useState(false);
  return (
    <div>
      {Toast && (
        <div className={`toast ${type}`}>
          <div>This is a {type} Component</div>
          <button onClick={() => setToast(false)}>X</button>
        </div>
      )}
      <button onClick={() => setToast(true)} className="showToast">
        Show {type} Toast
      </button>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <Toast type="success" />
      <Toast type="primary" />
      <Toast type="error" />
    </div>
  );
}
