import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {container, btn} from './style.css';

const MainSection = sources => {
  return <div className={container}>
    <button type="button" className={btn}>let's start now!</button>
  </div>
}

export default MainSection;
