import { useState } from "react";
import {fastKey} from "../packages/fast-hot-keys/src/index";

function App() {
  const [text, setText] = useState("");

  fastKey("ControlLeft+AltLeft+Digit7", () => console.log(text), [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
