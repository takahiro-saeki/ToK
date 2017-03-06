import xs from 'xstream';

const intent = actionData => {
  const data$ = actionData.DOM.select('#submit').events('click').mapTo({type: 'default'});
  const actionData$ = actionData.DOM.select('#submit2').events('click').mapTo({type: 'after'});
  const count$ = actionData.DOM.select('#count').events('click').mapTo({type: 'count'})
  const opt$ = actionData.DOM.select('li').events('click')
  .map(data => Object.assign({}, {type: 'answer'}, {data: data.target.textContent}))
  const returnData = xs.merge(
    data$,
    actionData$,
    count$,
    opt$
  )
  return returnData
}

export default intent;
