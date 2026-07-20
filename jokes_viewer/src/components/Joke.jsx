function JokeId({ id,content,category
}) {
  return (
    <div className="user-info">

      <h1>{id}</h1>
      <p>{category}</p>
      <p>{content}</p>
    </div>
  );
}

export default JokeId;
