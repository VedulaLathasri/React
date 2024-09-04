import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import MyPureComp from './components/Purecomp/MyPureComp';
import ParentComp from './components/Purecomp/ParentComp';


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
