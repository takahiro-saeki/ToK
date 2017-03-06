import xs from 'xstream';
import {html} from 'snabbdom-jsx';

const view = view$ => {
  const data = view$.map(count => {
    console.log(count)
    return <div>
      <button className="dec">Decrement</button>
      <button className="inc">Increment</button>
      <button className="hun">Hundred Increment</button>
    <p>{`Counter: ${count.default}`}</p>
    </div>
    });
  return data
}

export default view;
