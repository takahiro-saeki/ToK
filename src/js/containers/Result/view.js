import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ResultView from './ResultView';

const style = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const view = view$ => {
  const data = view$.map(count => {
    console.log(count)
    return <main style={(style)}>
             <Header />
             <ResultView />
             <Footer />
           </main>
    });
  return data
}

export default view;
