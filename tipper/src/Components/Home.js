import { useEffect, useState, useRef } from "react"

function Home() {

    const [total, setTotal] = useState("");
    const [newTotal, setNewTotal] = useState("");
    const input = useRef(null);

    function smallTip() {
        let msg = "smallTip";
        console.log(msg);
        const inputValue = parseFloat(input.current.value);
        const tipped = (inputValue * 18) / 100
        const afterTip = (inputValue + tipped);
        const roundedTip = parseFloat(tipped.toFixed(2));
        const roundedTotal = parseFloat(afterTip.toFixed(2));
        setTotal(roundedTip)
        setNewTotal(roundedTotal);
        input.current.value = "";
    }

    function mediumTip() {
        let msg = "mediumTip";
        console.log(msg); 
        const inputValue = input.current.value;
        const tipped = (inputValue * 20) / 100
        setTotal(tipped)
        input.current.value = "";
    }

    function largeTip() {
        let msg = "largeTip";
        console.log(msg);
        const inputValue = input.current.value;
        const tipped = (inputValue * 22) / 100
        setTotal(tipped)
        input.current.value = "";
    }

  return (
    <div>
      <header>
        <h1>Tipper</h1>
      </header>
      <div>
        <input ref={input}></input><br/>
        <button onClick={smallTip}>18%</button>
        <button onClick={mediumTip}>20%</button>
        <button onClick={largeTip}>22%</button>
      </div>
      <div>
        <p>Tip: ${total}</p>
        <p>New Total: ${newTotal}</p>
      </div>
    </div>
  );
}

export default Home;
