import logo from './logo.svg';
import './App.css';
import Fragments from './components/Fragment/Fragments';
// import ParentComp from './components/Purecomp/ParentComp';
import ParentComp from './components/Memo/ParentComp';
import RefsDemo from './components/Refs/RefsDemo';
import FocusInput from './components/RefsWithClassComp/FocusInput';
import PortalDemo from './components/Portals/PortalDemo';
import Hero from './components/Error boundaries/Hero';
import ErrorBoundary from './components/Error boundaries/ErrorBoundary';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';

function App() {
  return (  
    <div className="App">
      <UserProvider value = "Vishwas">
        <ComponentC/>
      </UserProvider>
      {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <Fragments/> */}
      {/* <ParentComp/> */}
      {/* <MyPureComp/> */}
    </div>
  );
}

export default App;
