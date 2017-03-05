import xs from 'xstream';
import baseData from './data';
import base from './quiz';

const initModel = model$ => {
  let defaultReducer$ = model$.filter(action => action.type === 'default')
  .map(data => Object.assign({}, baseData.diff, data))

  let afterReducer$ = model$.filter(action => action.type === 'after')
  .map(data => Object.assign({}, baseData.diff, data, {check: 'checkObj'}))

  let otherReducer$ = model$.filter(action => action.type === 'after2')
  .map(data => Object.assign({}, baseData.diff, data))

  let count$ = model$.filter(action => action.type === 'count')
  .map(data => Object.assign({}, ))

  const returnData = xs.merge(
    defaultReducer$,
    afterReducer$,
    otherReducer$
  )

  return returnData;
}


const generate = data$ => {
  const box = []
  data$.map((init$, i) => {
    console.log('init data is', init$)
    box.push(init$)
  })
  console.log(box)
}

generate(base.ques)

const models = modelData => {
  const data = initModel(modelData).startWith(Object.assign({}, base.ques[0], {type: 'none2'}))
  return data
}

export default models;
