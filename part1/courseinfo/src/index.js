import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>
const Description = ({contenido, exercise}) => <p>{contenido} {exercise}</p>
const Total = ({contenido, total}) => <p>{contenido} {total}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <Description contenido={part1} exercise={exercises1} />
      <Description contenido={part2} exercise={exercises2} />
      <Description contenido={part3} exercise={exercises3} />
      <Total contenido='Number of exercises' total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))