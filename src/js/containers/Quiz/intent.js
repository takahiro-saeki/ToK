import xs from 'xstream';

const intent = actionData => {
  const data$ = actionData.DOM.select('#submit').events('click').mapTo({type: 'default'});
  const actionData$ = actionData.DOM.select('#submit2').events('click').mapTo({type: 'after'});
  const count$ = actionData.DOM.select('#count').events('click').mapTo({type: 'count'})
  const returnData = xs.merge(
    data$,
    actionData$,
    count$
  )
  return returnData
}

export default intent;
