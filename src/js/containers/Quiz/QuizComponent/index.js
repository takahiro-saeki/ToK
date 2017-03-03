import xs from 'xstream';
import {html} from 'snabbdom-jsx';
//import {error, container} from './style.css';

const QuizComponent = ({data}) => {
  console.log(data[0].list)
  const generate = data.map((quiz, i) => {
    console.log(quiz)
    return <div>test</div>
  })
  console.log(generate)
  return <div>
    <h2>{data[0].title}</h2>
  <div>{generate}</div>
  </div>
}

export default QuizComponent;
