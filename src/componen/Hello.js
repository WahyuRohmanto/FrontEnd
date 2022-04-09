const Hello = (props) => {
  // destructing
  const { name } = props;
  return (
    <div className="hello">
      <h1>hello react</h1>
      <h2>saya {name} frontend enginer</h2>
    </div>
  );
};

export default Hello;
