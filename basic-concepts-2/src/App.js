import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import ParentComp from './components/Purecomp/ParentComp';
import ParentComp from './components/Memo/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/RefsWithClassComp/FocusInput';
import PortalDemo from './components/Portals/PortalDemo';

function App() {
  return (
    <div className="App">
      <PortalDemo/>
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <Fragments/> */}
      {/* <ParentComp/> */}
      {/* <MyPureComp/> */}
    </div>
  );
}

export default App;
