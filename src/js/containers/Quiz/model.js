import xs from 'xstream';
import baseData from './data';

const initModel = model$ => {
  let defaultReducer$ = model$.filter(action => action.type === 'default')
  .map(data => Object.assign({}, baseData.diff, data))

  let afterReducer$ = model$.filter(action => action.type === 'after')
  .map(data => Object.assign({}, baseData.diff, data, {check: 'checkObj'}))

  let otherReducer$ = model$.filter(action => action.type === 'after2')
  .map(data => Object.assign({}, baseData.diff, data))

  const returnData = xs.merge(
    defaultReducer$,
    afterReducer$,
    otherReducer$
  )

  return returnData;
}

const models = modelData => {
  const data = initModel(modelData).startWith(Object.assign({}, baseData.quizList, {type: 'none2'}))
  return data
}

export default models;
