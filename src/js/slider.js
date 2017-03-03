import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';

export default function slider(sources) {
  const changeValue$ = sources.DOM.select('#slider')
    .events('input')
    .map(ev => ev.target.value);

  const DEFAULT_VALUE = 50;
  const state$ = changeValue$.startWith(DEFAULT_VALUE);

  const vdom$ = state$.map(value =>
    <div>
      <div>Label: {value} units</div>
      <input id="slider" type="range" min="0" max="100" value={value} />
    </div>
  );

  return {
    DOM: vdom$,
    history: xs.of('/slider')
  };
}