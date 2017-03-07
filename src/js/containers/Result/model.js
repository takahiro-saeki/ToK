import xs from 'xstream';
import {captureClicks} from '@cycle/history';
import Main from '../Main';

const createModel = model$ => {
  let ToHome$ = model$.filter(action => action.type === 'ToHome')
  .map(data => captureClicks(xs.of('result')))
  let Replay$ = model$.filter(action => action.type === 'Replay')
  .map(data => location.assign('/quiz'))
  return xs.merge(
    ToHome$,
    Replay$
  )
}

const model = model$ => createModel(model$).startWith()

export default model;
