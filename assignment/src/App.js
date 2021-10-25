import './App.css';
import Tree from '../src/components/Menu'
import AccordionTree from 'components/AccordionTree';

function App() {
  return (
    <div className="App">
      <div>Component 1</div>
      <Tree />
      <div>Component 2</div>
      <AccordionTree />
    </div>
  );
}

export default App;
