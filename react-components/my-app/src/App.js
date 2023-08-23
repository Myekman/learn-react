import logo from './logo.svg';
import './App.css';
import FunctionalGretings from './components/FunctionalGretings';
import FunctionalGretingsProps from './components/FunctionalGretingsProps';

function App() {
  return (
    <div className="App">
      <FunctionalGretings />
      <FunctionalGretingsProps greeting="Nice to meet you!" name="my" />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
