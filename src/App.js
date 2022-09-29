import './App.css';
import Developers from './components/Developers/Developers';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode} from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div>
      <div className='title'>
      <h1><FontAwesomeIcon icon={faCode}></FontAwesomeIcon><span>Best Developers Programming Hero</span></h1>
      </div>
      <Developers></Developers>
    </div>
  );
}

export default App;
