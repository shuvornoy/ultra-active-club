import './App.css';
import Developers from './components/Developers/Developers';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCode} from '@fortawesome/free-solid-svg-icons';
import Question from './components/Question/Question';



function App() {
  return (
    <div className='main-container'>
      <div className='title'>
      <h1><FontAwesomeIcon icon={faCode}></FontAwesomeIcon><span>Best Developers Programming Hero</span></h1>
      <h3>Select today’s Developers</h3>
      </div>
      <Developers></Developers>
      <div>
        <Question></Question>
      </div>
    </div>
    

  );
}

export default App;
