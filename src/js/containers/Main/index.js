import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainSection from './MainSection';

const style = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

export default function Main(sources) {
  const vdom$ = sources.DOM.select('button').events('click')
  .map(ev => location.assign('/quiz'))
  .startWith('default')
  .map(data =>
    <main style={(style)}>
      <Header />
      <MainSection />
      <Footer />
    </main>
  );

  return {
    DOM: vdom$,
    history: xs.of('/')
  };
}
