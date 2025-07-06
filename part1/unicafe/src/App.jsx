import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlePlusGood = () => {
    setGood(good + 1);
  };
  const handlePlusNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handlePlusBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h2>give feedback</h2>
      <Button onClick={handlePlusGood} text={"good"} />
      <Button onClick={handlePlusNeutral} text={"neutral"} />
      <Button onClick={handlePlusBad} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{text == "positive" ? `${value} %` : value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? (good * 100) / total : 0;
  return (
    <>
      {total > 0 ? (
        <>
          <h2>statistics</h2>
          <table>
            <tbody>
              <StatisticLine text={"good"} value={good} />
              <StatisticLine text={"neutral"} value={neutral} />
              <StatisticLine text={"bad"} value={bad} />
              <StatisticLine text={"all"} value={total} />
              <StatisticLine text={"average"} value={average} />
              <StatisticLine text={"positive"} value={positive} />
            </tbody>
          </table>
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default App;
