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

const views = view => {
  return view.map(event => {
    console.log('event is', event)
    return (
      <main style={(style)}>
        <Header />
        {event.judge === 'end' ? false : <QuizComponent basicData={event} />}
        <Footer />
      </main>
    )
  });
}

export default views;
