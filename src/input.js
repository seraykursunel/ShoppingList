import { useState } from "react";
import "./styles.css";

export default function Input({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button>Ekle</button>
      </form>
    </div>
  );
}
