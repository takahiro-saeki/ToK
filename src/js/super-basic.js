import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import uuid from 'uuid';

const superBasic = sources => {
  const action$ = xs.merge(
    sources.DOM.select('.dec').events('click').mapTo(-1),
    sources.DOM.select('.inc').events('click').mapTo(+1)
  );
  const testAction$ = xs.merge(
    sources.DOM.select('.random').events('click').mapTo(uuid.v4()),
    sources.DOM.select('.random2').events('click').mapTo(uuid.v1())
  )

  const count$ = action$.fold((x, y) => x + y, 0);
  const calc$ = testAction$.fold((x, y) => x + y, '')

  const testDom$ = calc$.map(test =>
    <div>
      <button className="random">random</button>
      <button className="random2">random</button>
      <p>{`test: ${test}`}</p>
    </div>
  )
  const vdom$ = count$.map(count =>
    <div>
      <button className="dec">Decrement</button>
      <button className="inc">Increment</button>
      <p>{`counter: ${count}`}</p>
    {testDom$}
    </div>
  );

  const sinks = {
    DOM: vdom$,
    history: xs.of('/super-basic')
  };
  return sinks;
}

export default superBasic;
