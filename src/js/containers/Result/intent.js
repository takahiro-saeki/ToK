import xs from 'xstream';
import {html} from 'snabbdom-jsx';

const action = actions => {
  const ToHome$ = actions.DOM.select('#toHome').events('click').mapTo({type: 'ToHome'});
  const Replay$ = actions.DOM.select('#replay').events('click').mapTo({type: 'Replay'});

  return xs.merge(
    ToHome$,
    Replay$
  )
}

export default action;
