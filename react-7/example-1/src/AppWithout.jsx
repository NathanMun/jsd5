// import React from "react";
// import "./App.css";

// function App() {
//   const temperature = 12;
//   return (
//     <div id="app">
//       <Header temp={temperature} />
//       <Content tempContent={temperature} />
//       <Footer />
//     </div>
//   );
// }

// function Header(props) {
//   const tempInHeader = props.temp;
//   return (
//     // Code for Header
//     // <Header />
//     <header>
//       <span>Turn on / off</span>
//       <p>Current Temperature: {tempInHeader}</p>
//     </header>
//   );
// }

// function Content(props) {
//   const tempInContent = props.tempContent;
//   return (
//     // Code for Content
//     // <Content />
//     <div>
//       <Temperature tempTemperature={tempInContent} />
//     </div>
//   );
// }

// function Temperature(props) {
//   const tempInTemperature = props.tempTemperature;
//   return (
//     // Code for Temperature
//     // <Temperature />
//     <div id="temperature">
//       <span>{tempInTemperature} Oc</span>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     // Code for Footer
//     // <Footer />
//     <footer>
//       <button>Up</button>
//       <button>Down</button>
//     </footer>
//   );
// }


import { useState } from "react";
import "./App.css";
import { createContext, useContext } from "react";

const MyContext = createContext();

function AppWithout() {
  const [temp, setTemp] = useState(12);
  return (
    <MyContext.Provider
      value={{
        temp: temp,
        setTemp: setTemp,
      }}
    >
      <div id="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

function Header() {
  const { temp } = useContext(MyContext);
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temp}</p>
    </header>
  );
}

function Content() {
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature />
    </div>
  );
}

function Temperature() {
  const { temp } = useContext(MyContext);

  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{temp} Oc</span>
    </div>
  );
}

function Footer() {
  const myContextValue = useContext(MyContext);
  const setTemp = myContextValue.setTemp;
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={() => setTemp((prevValue) => prevValue + 1)}>Up</button>
      <button onClick={() => setTemp((prevValue) => prevValue - 1)}>
        Down
      </button>
    </footer>
  );
}

export default AppWithout;
export default App;
