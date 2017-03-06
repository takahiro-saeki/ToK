import xs from 'xstream';
import {html} from 'snabbdom-jsx';
//import {error, container} from './style.css';

const QuizComponent = ({basicData}) => {
  return <div>
           <h2>{basicData.title}</h2>
           <div>{basicData.hint}</div>
           <ul>{basicData.list.map((data, i) => {
             return <li>{data.select}</li>
           })}</ul>
           <button type="button" id="submit">submit</button>
           <button type="button" id="submit2">submit</button>
           <button type="button" id="count">count</button>
         </div>
}

export default QuizComponent;
