import xs from 'xstream';
import {html} from 'snabbdom-jsx';
//import {error, container} from './style.css';

const QuizComponent = ({basicData}) => {
  return <div>
           <h2>{basicData.type}</h2>
         <div>test</div>
           <button type="button" id="submit">submit</button>
           <button type="button" id="submit2">submit</button>
         </div>
}

export default QuizComponent;
