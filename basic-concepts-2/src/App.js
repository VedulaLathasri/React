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
// import ClickCounter from './components/HigherOrderComponents/ClickCounter';
// import HoverCounter from './components/HigherOrderComponents/HoverCounter';
import ClickCounter from './components/RenderProps/ClickCounter';
import HoverCounter from './components/RenderProps/HoverCounter';
import User from './components/RenderProps/User';
import RPCounter from './components/RenderProps/RPCounter';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';

function App() {
  return (  
    <div className="App">
      <UserProvider value = "Vishwas">
        <ComponentC/>
      </UserProvider>
    {/*
      <RPCounter>
        { (count, incrementCount) =>
        // render = { (count, incrementCount) => // render is the normal naming convention, if we dont use this, we need to access as this.props.children in the Components.
          <ClickCounter count = {count} incrementCount ={incrementCount}/>}
      </RPCounter>
      <RPCounter>*/}
        {/* // render = { (count, incrementCount) => */}
//         { (count, incrementCount) =>
//           <HoverCounter count={count} incrementCount={incrementCount}/>}
//       </RPCounter>
      {/* <User render ={(isLoggedIn)=> isLoggedIn? "Vishwas" : "Guest"}/> */}


      {/* <ClickCounter/>
      <HoverCounter/> */}
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
