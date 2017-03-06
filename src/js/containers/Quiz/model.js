import xs from 'xstream';
import baseData from './data';
import base from './quiz';

const selectCheck = (identify, data) => {
  let checkAnswer = null;
  const check = base.ques[0].list.map((list, i) => {
    if (list.select === identify) {
      checkAnswer = list.judge;
      return checkAnswer;
    }
  })
  return Object.assign({}, base.ques[0], data, {judge: checkAnswer})
}

const initModel = model$ => {
  let defaultReducer$ = model$.filter(action => action.type === 'default')
  .map(data => Object.assign({}, baseData.diff, data))

  let afterReducer$ = model$.filter(action => action.type === 'after')
  .map(data => Object.assign({}, baseData.diff, data, {check: 'checkObj'}))

  let otherReducer$ = model$.filter(action => action.type === 'after2')
  .map(data => Object.assign({}, baseData.diff, data))

  let count$ = model$.filter(action => action.type === 'count')
  .map(data => Object.assign({}, ))

  let opt$ = model$.filter(action => action.type === 'answer')
  .map(data => selectCheck(data.data, data))

  const returnData = xs.merge(
    defaultReducer$,
    afterReducer$,
    otherReducer$,
    opt$
  )

  return returnData;
}

const models = modelData => {
  const data = initModel(modelData).startWith(Object.assign({}, base.ques[0], {type: 'none2'}, {count: 0}))
  return data
}

export default models;
