import xs from 'xstream';
import {html} from 'snabbdom-jsx';

const action = actions => {
  const testAction1 = actions.DOM.select('.dec').events('click').mapTo({dec: 'test', type: 'test1'});
  const testAction2 = actions.DOM.select('.inc').events('click').mapTo({inc: 'test2', type: 'test2'});
  const testAction3 = actions.DOM.select('.hun').events('click').mapTo({hun: 'test3', type: 'test3'});
  return xs.merge(
    testAction1,
    testAction2,
    testAction3,
  );
}

export default action;
