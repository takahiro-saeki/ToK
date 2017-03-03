import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import style from './style.css';

function Header() {
  return (
    <header className={style.header}>
      <nav>header</nav>
    </header>
  )
}

export default Header;
