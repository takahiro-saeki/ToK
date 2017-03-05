import {button, div, input, label, li} from '@cycle/dom';

const TestView = state$ => {
  return li('.todoRoot', [
    div('.view', [
      button('.destroy')
      button('.delete')
    ])
  ]);
}

export default TestView;
