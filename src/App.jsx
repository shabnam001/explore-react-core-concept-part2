import './App.css'
import Counter from './counter';
import Friends from './friends';
import Player from './player';
import Posts from './post';
import Users from './user';

function App() {

  function handleClick(){
    alert('Button clicked');
  }
  const handleClickOk = () =>{
    alert('clicked ok')
  }
  const addToNum = (num) =>{
    alert(num + 10)
  }

  return (
    <>
      <h1>React core concept</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickOk}>Click Ok</button>
      <button onClick={() =>{alert('print OK')}}>OK</button>
      <button onClick={() => addToNum(10)}>Get Sum</button>
      <Counter></Counter>
      <Player></Player>
      <Users></Users>
      <Posts></Posts>
      <Friends></Friends>
    </>
  )
}

export default App
