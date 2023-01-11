import Time from './components/widgets/time/Time'
import Counter from './components/widgets/counter/Counter';

import './App.scss';

function App() {

  return (
    <div className='app'>
      <h1>Counter App</h1>
      <Counter />
      <Time />

    </div>
  );
}


export default App;
