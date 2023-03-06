
import './App.css';
import Hdr from './shared/Hdr';

function App() {
  return (
    <>
      <div style={{'height':'10vh' }} className="row">
        <div className="c12-l-12 center">
            <h3 className="">Heading</h3>
         </div>
      </div>
      <></>
      <div style={{'height':'100vh' }} className="row">
        <div style={{'height':'10vh' }} className="c12-l-2 ">
          <h3 className="">Left Pan</h3>
        </div>
        <div className="c12-l-8 center">
          <h3 className="">Middle Pan</h3>
        </div>
        <div className="c12-l-2">
          <h3 className="">Right Pan</h3>
        </div>
      </div>
    </>
  );
}

export default App;
