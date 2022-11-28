import './App.css';

// Import Components
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// function App() {
//   const boolean = true;

//   if (boolean) {
//     return <Footer/>;
//   } else {
//     return <Sidebar />;
//   }
// }

// export default App;


import Spinner from './components/Spinner'; // <-- add
import { useState } from 'react'; // <-- add
 
function App() {
  // Declare a new state variable, which we'll call "isLoading"
  const [isLoading, setIsLoading] = useState(false); // <-- add
 
  if (isLoading) {
    return <Spinner />;
  } 
  else {
    return (
      <div className="App">
        <Footer />
      </div>
    );
  } 
}
 
export default App;