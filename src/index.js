//for test
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
//until here

import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import Main from './js/containers/Main';
import Quiz from './js/containers/Quiz';
import Result from './js/containers/Result';
import NoMatch from './js/containers/NoMatch';
document.body.style.margin = 0;

const ApiTest = sources => {
  const action$ = xs.merge(
    sources.DOM.select('.dec').events('click').mapTo(-1),
    sources.DOM.select('.inc').events('click').mapTo(+1),
    sources.DOM.select('.hun').events('click').mapTo(+100)
  );

  const count$ = action$.fold((x, y) => x + y, 10);

  const vdom$ = count$.map(count =>
    <div>
      <button className="dec">Decrement</button>
      <button className="inc">Increment</button>
      <button className="hun">Hundred Increment</button>
    <p>{`Counter: ${count}`}</p>
    </div>
  );

  return {
    DOM: vdom$,
    history: xs.of('/api-test')
  };
}

const render = route => {
  run(route, {
    DOM: makeDOMDriver('#app'),
    history: makeHistoryDriver()
  });
}


const routeMatch = () => {
  const url = location.pathname;
  switch(url) {
    case '/': return render(Main)
    case '/quiz': return render(Quiz)
    case '/result': return render(Result)
    case '/api-test': return render(ApiTest)
    default: return render(NoMatch)
  }
}
routeMatch()
