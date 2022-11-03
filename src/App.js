import {Routes, Route} from 'react-router-dom'
import './App.css';
import Homepages from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Homepages/>} />
        <Route path='/chats' element={<Chatpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
