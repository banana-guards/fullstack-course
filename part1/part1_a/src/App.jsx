const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts
    .map((part) => part.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <>
      <p>{totalExercises}</p>
    </>
  );
};

const Header = (props) => {
  console.log(props.course);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};

export default App;
