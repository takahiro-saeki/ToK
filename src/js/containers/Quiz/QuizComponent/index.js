import xs from 'xstream';
import {html} from 'snabbdom-jsx';
import {containers} from './style.css';

const QuizComponent = ({basicData}) => {
  return <div className={containers}>
           <h2>{basicData.title}</h2>
           <div>{basicData.hint}</div>
           <ul>{basicData.list.map((data, i) => {
             return <li>{data.select}</li>
           })}</ul>
         </div>
}

export default QuizComponent;
