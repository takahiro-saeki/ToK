import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuizComponent from './QuizComponent';
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
      <QuizComponent />
      <Footer />
    </main>
  );

  return {
    DOM: vdom$,
    history: xs.of('/quiz')
  };
}
