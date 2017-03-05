import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import intent from './intent';
import views from './view';
import models from './model';

export default function Main(sources) {
  const action$ = intent(sources);
  const model$ = models(action$)
  const view$ = views(model$)

  return {
    DOM: view$,
    history: xs.of('/quiz')
  };
}
