import './App.css';
import RoutesTree from './components/RoutesTree';
import {TopNavigation} from "./components/top-navigation/top-navigation";

function App() {

  return (
    <div className='App'>
      <TopNavigation />
      <RoutesTree />
    </div>
  );
}

export default App;
