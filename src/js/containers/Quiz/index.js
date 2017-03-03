import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuizComponent from './QuizComponent';

const style = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const quizList = [
  {
    title: 'title',
    answer: 'answer',
    list: [
      {
        select: 'select1',
        judge: true
      },
      {
        select: 'select2',
        judge: false
      },
      {
        select: 'select3',
        judge: false
      },
      {
        select: 'select4',
        judge: false
      }
    ]
  }
]

export default function Main(sources) {
  const vdom$ = xs.of(
    <main style={(style)}>
      <Header />
      <QuizComponent data={quizList} />
      <Footer />
    </main>
  );

  return {
    DOM: vdom$,
    history: xs.of('/quiz')
  };
}
