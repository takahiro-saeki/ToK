import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import {footer} from './style.css';

function Footer() {
  return (
    <footer className={footer}>
      <div>footer</div>
    </footer>
  )
}

export default Footer;
