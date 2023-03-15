
import './App.css';
import InputElement from './component/hookUseState';
import TogglerOnMouse from './component/TogglerOnMouse';
import TogglerScroll from './component/TogglerScroll';
function App() {
  return (
    <div className="App">
      <h1>Learn React Hook</h1>
      <br />
      <InputElement />
      <TogglerOnMouse primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/500x500" />
      <TogglerOnMouse primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/500x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
      <TogglerScroll primaryImg="https://source.unsplash.com/user/c_v_r/500x500" secondaryImg="https://source.unsplash.com/user/c_v_r/700x500" />
    </div>
  );
}

export default App;
