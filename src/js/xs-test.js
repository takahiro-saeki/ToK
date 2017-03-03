import {run} from '@cycle/run'
import {div, button, makeDOMDriver} from '@cycle/dom'
import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {makeHistoryDriver, captureClicks} from '@cycle/history';
import createHistory from 'history/createBrowserHistory';
import tween from 'xstream/extra/tween';
import testMd from '../md/test.md';
import concat from 'xstream/extra/concat';
const renderDOM = () => {
  const md = document.getElementById('mark');
  console.log(md)
  //md.innerHTML = testMd;
}

function targetStyle(left, top) {
  return {
    position: 'relative',
    backgroundColor: 'blue',
    width: '60px',
    height: '60px',
    left: `${Math.round(left)}px`,
    top: `${Math.round(top)}px`,
  };
};

const buttonStyle = {
  fontSize: '20px',
  marginBottom: '20px',
};

const xsTest = sources => {
  const start$ = sources.DOM.select('.animate').events('click').mapTo();

   const leftToRight$ = tween({
     from: 0, to: 250, duration: 500, ease: tween.power3.easeIn
   }).map(x => ({ left: x, top: 0 }));

   const topToBottom$ = tween({
     from: 0, to: 250, duration: 500, ease: tween.power3.easeOut
   }).map(x => ({ left: 250, top: x }));

   const circularReturn$ = tween({
     from: Math.PI / 2, to: Math.PI, duration: 1600, ease: tween.power3.easeInOut
   }).map(x => ({ left: 250 + Math.cos(x) * 250, top: Math.sin(x) * 250}));

   const coords$ = start$.map(() => concat(
     xs.of({ left: 0, top: 0 }), leftToRight$, topToBottom$, circularReturn$
   )).flatten().startWith({ left: 0, top: 0 });

   const view$ = coords$.map(({ left, top }) =>
   <div>
     <button className="animate" style={(buttonStyle)}>Animate it!</button>
     <div className="target" style={(targetStyle(left, top))}></div>
   </div>
   );

  const sinks = {
    DOM: view$,
    history: xs.of('/xs-test')
  };
  return sinks;
}
export default xsTest;
