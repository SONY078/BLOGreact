import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './Front-end Components/Home';
import Front from './Front-end Components/Front';
import { MainPAge } from './Front-end Components/MainPAge';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Front/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:category/:id' element={<MainPAge/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
