import './App.css'
import { useState } from 'react'
import Content from './component/Content'
import { useRef } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const ref = useRef(10);

  return (
    <>
      <h1>Ref: {ref.current}</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>  
      <>{isVisible ? <Content /> : null}</>  
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={() => ref.current++}>Increment</button>
      <h1>Đây là test Github</h1>
    </>
  )
}


export default App
