import './App.css';
import Counter from './component/useState';
import TwoWay from './component/Two-way';
import TodoList from './component/todolist';
import MountedUn from './component/mountedUn';
import LearnUserEffect from './component/learUserEffect';
import PreviewAvatar from './component/previewAvatar';
import ChatApp from './component/chatApp';
import UseLayoutEffectL from './component/useLayoutEffect';
import LearnUseRef from './component/learnUseRef';
import LearnMemo from './component/learMeni';
import LearnUseMemo from './component/learnUseMemo';
import LearnReduce from './component/learnReducer';
import LearnContext from './component/learnContext';
import LearnImprerative from './component/learnUseImprerative';
import { useCallback, useState } from 'react';
function App() {
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <>
      <div className="App">
        <Counter />
        <TwoWay />
        <TodoList />
       
        <button onClick={e => setShow(!show)}>
          Toggle
        </button>
        {
          show && <MountedUn />
        }
        {
          show && <LearnUserEffect />
        }
        <PreviewAvatar />
        <ChatApp />
        <UseLayoutEffectL />
        <LearnUseRef />
        <LearnMemo onIncrease={handleIncrease}  />
        <h3>{count}</h3>
        <LearnUseMemo />
        <LearnReduce />
        <LearnContext />
        <LearnImprerative />
      </div>
    </>
  );
}

export default App;
