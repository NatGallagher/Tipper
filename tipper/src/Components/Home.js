import { useEffect, useState, useRef } from "react"

function Home() {

    const [total, setTotal] = useState("");
    const input = useRef(null);

    function smallTip() {
        let msg = "smallTip";
        console.log(msg);
        const inputValue = input.current.value;
        const tipped = (inputValue * 18) / 100
        setTotal(tipped)
    }

    function mediumTip() {
        let msg = "mediumTip";
        console.log(msg); 
        const inputValue = input.current.value;
        const tipped = (inputValue * 20) / 100
        setTotal(tipped)
    }

    function largeTip() {
        let msg = "largeTip";
        console.log(msg);
        const inputValue = input.current.value;
        const tipped = (inputValue * 22) / 100
        setTotal(tipped)
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
        {total}
      </div>
    </div>
  );
}

export default Home;
