import ReactDOM from 'react-dom'
import { createStore } from "redux";

const reducer = (state = 0,action) => {
  console.log('reducer',state,action);
  switch (action.type) {
    case 'minus':
      state = state - 1
      break;
    case 'plus':
        state = state + 1
        break;
    case 'multiplication':
      state = state * 6
      break;
  
    default:
      break;
  }
  return state
}

const store = createStore(reducer)
const unSubscribe= store.subscribe( () => {
  console.log('state',store.getState());
})

store.dispatch({type:'minus'})
store.dispatch({type:'plus'})
store.dispatch({type:'multiplication'})



store.dispatch({type:'multiplication'})
unSubscribe()

ReactDOM.render(<h1>redux</h1> ,document.getElementById('root'))
