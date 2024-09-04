import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import ParentComp from './components/Purecomp/ParentComp';
import ParentComp from './components/Memo/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/RefsWithClassComp/FocusInput';

function App() {
  return (
    <div className="App">
      <FocusInput/>
      {/* <RefsDemo/> */}
      {/* <Fragments/> */}
      {/* <ParentComp/> */}
      {/* <MyPureComp/> */}
    </div>
  );
}

export default App;
