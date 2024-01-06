import { useRef, useState } from "react";

function App() {
  let[count,setCount]=useState(0);
  let countRef = useRef(0);
  // Last
  let [error,seterror] = useState(false)
 // Last

// ==== for useState==== 

let clickHendler=()=>{
  count++
  setCount(count)
}
//==== for useState ====

//  ==== for useRef =====

  let clickHendler2 =()=>{
    // countRef.current++
    console.log(countRef.current++)
    if (countRef.current==5) {
      seterror(true)
    }
  }
  //  ===== for useRef =====
  
  return (
    <>

 {/*==== useState ==== */}

  <h1>useState</h1>
  <h2>{count}</h2>
  <button onClick={clickHendler}>click</button>

 {/* ==== useState End ====  */}

{/* //  ====useRef ======= */}

<h1>useRef</h1>
{/* <h2>Ishita</h2> */}
{/* <h2 ref={countRef}>Ishita</h2> */}
<h2>{countRef.current}</h2>
<button onClick={clickHendler2}>click</button>

{/* //  ====useRef End ======= */}

{/* if eroor part */}
{error && <h1> Block For 5 Minutes</h1>}
{/* if eroor part end */}

    </>
  )
}
export default App
