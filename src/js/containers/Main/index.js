import {run} from '@cycle/run'
import {makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import Header from '../../components/global/Header';
import Footer from '../../components/global/Footer';
import MainSection from './MainSection';
document.body.style.margin = 0;

const style = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}
export default function Main(sources) {
  const vdom$ = xs.of(
    <main style={(style)}>
      <Header />
      <MainSection />
      <Footer />
    </main>
  );

  return {
    DOM: vdom$,
    history: xs.of('/main')
  };
}
