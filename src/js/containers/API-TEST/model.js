import xs from 'xstream';

const modelCheck = model$ => {
  let test1 = model$.filter(action => action.type === 'test1')
  .map(data => Object.assign({}, {default: 'check'}, data))
  let test2 = model$.filter(action => action.type === 'test2')
  .map(data => Object.assign({}, {default: 'check2'}, data))
  let test3 = model$.filter(action => action.type === 'test3')
  .map(data => Object.assign({}, {default: 'check3'}, data))
  return xs.merge(
    test1,
    test2,
    test3
  )
}

const model = data => {
  return modelCheck(data).fold((x, y) => Object.assign({}, x, y), {}).startWith({default: 'default'});
}

export default model;
