// import logo from './logo.svg';
// import './App.css';

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

// export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <img
          src="/Gayathri.jpg"
          alt="Profile"
          className="profile-pic"
        />
        <h1>K.Gayathri</h1>
        <p>
          <strong>Role:</strong> Full-Stack Developer
        </p>
        <p>
          <strong>Email:</strong> gayathri.korimilli@sasi.ac.in
        </p>
        <p>
          <strong>Location:</strong> Bengaluru, India
        </p>
      </div>
    </div>
  );
}

export default App;
