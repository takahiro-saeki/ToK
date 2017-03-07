import xs from 'xstream';
import delay from 'xstream/extra/delay'
import baseData from './data';
import base from './quiz';

const selectCheck = (identify, data) => {
  if (data.count === 3) {
    return Object.assign({}, base.ques[data.count], data, {judge: 'end'}, {count: 3})
  } else {
    let checkAnswer = null;
    const check = base.ques[data.count].list.map((list, i) => {
      if (list.select === identify) {
        checkAnswer = list.judge;
        return checkAnswer;
      }
    })
    const totalData = Object.assign({}, base.ques[data.count], data, {judge: checkAnswer}, {count: data.count++})
    return totalData
  }
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
  const foldData = modelData.fold((x, y) => Object.assign({}, x, y), {count: 1})
  const data = initModel(foldData)
  .startWith(Object.assign({}, base.ques[0], {type: 'none2'}, {count: 0})).compose(delay(200));
  return data;
}

export default models;
