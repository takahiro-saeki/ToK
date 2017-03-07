import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import Main from './js/containers/Main';
import Quiz from './js/containers/Quiz';
import Result from './js/containers/Result';
import NoMatch from './js/containers/NoMatch';
import ApiTest from './js/containers/API-TEST';
document.body.style.margin = 0;

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
