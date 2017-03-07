import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import action from './intent';
import model from './model';
import view from './view';

const Result = sources => {
  const action$ = action(sources)
  const model$ = model(action$)
  const view$ = view(model$)

  return {
    DOM: view$,
    history: xs.of('/result')
  };
}

export default Result;
