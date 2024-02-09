import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  // ref hoook

  const passRef = useRef(null)
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed){ str += "0123456789"};
    if (charAllowed){ str += "!@#$%^&*()_+"};

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);

  }, [length, numberAllowed, charAllowed, setPass]);

  const copyPassToClip = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  useEffect( ()=>{passGenerator()}, [length, numberAllowed, charAllowed, passGenerator])
  return (
    <>
      <div className="w-[50%] max-wd-md mx-auto text-center shadow-md rounded-lg bg-gray-800 text-orange-800 p-4 my-8 ">
        <h1 className="text-4xl text-center text-white mb-3">
          PASSWORD GENERATOR
        </h1>

        <div className="flex rounded-lg shadow overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={pass}
            placeholder="pass"
            readOnly
            ref={passRef}
          />

          <button 
          onClick={copyPassToClip}
          className="bg-blue-700 p-3 text-white">COPY</button>

        </div>


        <div className="flex text-[20px] gap-x-[20px] text-white">
         
          <div className="flex items-center gap-x-1 cursor-pointer">
            <input type="range" 
            min={6}
            max={50}
            value={length}
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange= {()=>{
              setNumberAllowed((prev)=>!prev)
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked = {charAllowed}
            id="charInput"
            onChange= {()=>{
              setCharAllowed((prev)=>!prev)
            }} />
            <label htmlFor="charInput">Special Character</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
