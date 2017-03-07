import xs from 'xstream';

const createModel = model$ => {
  let ToHome$ = model$.filter(action => action.type === 'ToHome')
  .map(data => location.assign('/'))
  let Replay$ = model$.filter(action => action.type === 'Replay')
  .map(data => location.assign('/quiz'))
  return xs.merge(
    ToHome$,
    Replay$
  )
}

const model = model$ => createModel(model$).startWith()

export default model;
