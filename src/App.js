import React, {useState} from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [likes, setLikes] = useState(7)
  const [value, setValue] = useState('text inside input')
  

  function increment(){
    setLikes(likes + 1)
  }
  
  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
       type="text"
       value={value}
       onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </div>
  );
}

export default App;
