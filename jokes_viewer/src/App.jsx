import { useEffect, useState } from "react"
import JokeId from "./components/Joke.jsx";


function App() {

  const [jokes, setJokes] = useState(null);
  const [num, setNumber] = useState(1);

  useEffect(() => {
    fetch(`https://api.freeapi.app/api/v1/public/randomjokes/${num}`)

    .then((res) => res.json())
    .then((result) => {
      setJokes(result.data)
    })

    .catch((err) => console.log(err))

  }, [num])


  return (
    <>
      <div 
      style={{ backgroundColor: "olive" }}
      className="m-10 p-10 rounded-xl mt-10 max-w-md mx-auto text-center flex flex-col gap-5">

      
      <div className=" mx-auto h-10 w-full flex justify-center items-center">
        <h1 className="font-serif font-black underline"> Joke Data by Id</h1>
      </div>

      <div>
        <JokeId 
          id={jokes?.id}
          content={jokes?.content}
          category={jokes?.category}
        />
      </div>

      <div className="button-group">
        <button className="btn-increase" onClick={() => setNumber(num + 1)}>
          → Increase
        </button>
        <button 
          className="btn-decrease" 
          onClick={() => setNumber(num - 1)}
          disabled={num === 1}
        >
          ← Decrease
        </button>
      </div>
</div>

    </>
  )
}

export default App
