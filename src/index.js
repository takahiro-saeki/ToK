import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import Main from './js/containers/Main/index';

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
    //case '/quiz': return render(Quiz)
  }
}
routeMatch()
