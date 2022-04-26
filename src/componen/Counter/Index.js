import { useEffect, useState } from "react";

function Counter() {
  // variable angka

  const [angka, setAngka] = useState(0);
  function addAngka() {
    setAngka(angka + 1);
  }

  //   use effect
  function updateDOM() {
    console.log("lifecycle : di Mount");
    //   Melakaukan side effect : mengakses DOM
    document.title = `hasil ${angka}`;
  }
  useEffect(updateDOM, [angka]);

  return (
    <div>
      <p>hasil : {angka}</p>
      <button onClick={addAngka}>add</button>
    </div>
  );
}

export default Counter;
