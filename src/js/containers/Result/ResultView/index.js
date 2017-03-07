import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {container} from './style.css';

const ResultView = sources => {
  return <div className={container}>
    <div>it's result.</div>
  <button type="button" id="replay">リプレイ</button>
<button type="button" id="toHome">ホームに戻る</button>
  </div>
}

export default ResultView;
