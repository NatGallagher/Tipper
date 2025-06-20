import { useEffect, useState } from "react"

function Home() {

    const [total, setTotal] = useState("");

    function smallTip() {
        let msg = "smallTip";
        console.log(msg);
        setTotal("18%")
    }

    function mediumTip() {
        let msg = "mediumTip";
        console.log(msg); 
        setTotal("20%")
    }

    function largeTip() {
        let msg = "largeTip";
        console.log(msg);
        setTotal("22%")
    }

  return (
    <div>
      <header>
        <h1>Tipper</h1>
      </header>
      <div>
        <input></input><br/>
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
