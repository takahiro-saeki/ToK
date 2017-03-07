import xs from 'xstream';

const intent = actionData => {
  const opt$ = actionData.DOM.select('li').events('click')
  .map(data => Object.assign({}, {type: 'answer'}, {data: data.target.textContent}))
  const returnData = xs.merge(
    opt$
  )
  return returnData
}

export default intent;
