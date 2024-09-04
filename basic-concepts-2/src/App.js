import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import ParentComp from './components/Purecomp/ParentComp';
import ParentComp from './components/Memo/ParentComp';

function App() {
  return (
    <div className="App">
      {/* <Fragments/> */}
      <ParentComp/>
      {/* <MyPureComp/> */}
    </div>
  );
}

export default App;
