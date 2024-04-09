import Body from './Components/Body';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Body/>
      <Toaster/>
    </div>
  );
}

export default App;
