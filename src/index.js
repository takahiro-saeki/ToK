import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import BmiCalculator from './js/calc/BmiCalculator.js';
import style from './css/style.css';
import xsTest from './js/xs-test';
import slider from './js/slider';
import superBasic from './js/super-basic';
import pageTest from './js/pageTest/index';
import Main from './js/containers/Main/index';

const createFunc = () => { history: 'history' };

const basic = sources => {
  const history = createHistory()
  const view$ = sources.DOM.select('input').events('click')
      .map(ev => location.assign('/test'))
      .startWith(true)
      .map(toggled =>
        <div>
          <input type="checkbox" /> Toggle me
          <p>{toggled ? 'ON' : 'off'}</p>
        </div>
      )

const sinks = {
  DOM: view$,
  history: xs.of('/')
};
return sinks;
}

const other = sources => {
  const view$ = xs.of(
    <div>test</div>
  )
  const sinks = {
    DOM: view$,
    history: xs.of('/test')
  };
  return sinks;
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
    case '/': return render(basic)
    case '/test': return render(other)
    case '/xs-test': return render(xsTest)
    case '/calc': return render(BmiCalculator)
    case '/slider': return render(slider)
    case '/super-basic': return render(superBasic)
    case '/page-test': return render(pageTest)
    case '/main': return render(Main)
  }
}
routeMatch()





/*
const history = createHistory()
console.log(`history is`, history)
const location = history.location
const unlisten = history.listen((location, action) => {
console.log(`action is ${action}`)
console.log(`location is ${location}`, location)
console.log(action, location.pathname, location.state)
})

history.push('/home', [{ some: 'state' }, { some: 'state' }])

// To stop listening, call the function returned from listen().
unlisten()
console.log(unlisten())
*/
