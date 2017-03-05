import xs from 'xstream';

const intent = actionData => {
  const data$ = actionData.DOM.select('#submit').events('click').mapTo({type: 'default'});
  const actionData$ = actionData.DOM.select('#submit2').events('click').mapTo({type: 'after'});
  const returnData = xs.merge(
    data$,
    actionData$
  )
  return returnData
}

export default intent;
