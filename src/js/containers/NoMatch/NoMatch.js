import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {error, container} from './style.css';

const NoMatch = sources => {
  return <div className={container}>
    <div type="button" className={btn}>404 error</div>
  </div>
}

export default NoMatch;
