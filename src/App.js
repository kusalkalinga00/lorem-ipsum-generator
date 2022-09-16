import React, { useState } from "react";
import data from "./data";

function App() {
  //use useState setting for paragraph count
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 10) {
      amount = 10;
    }

    setText(data.slice(0, amount));
  };

  return (
    <section className="container mx-auto text-center p-6">
      <h3 className="text-4xl">Lorem Ipsum Generator</h3>
      <form className="pt-8 sm:pt-12" onSubmit={handleSubmit}>
        <label htmlFor="amount" className="text-xl font-medium">
          paragraphs:{" "}
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="form-input rounded-full text-center border-black focus:border-black focus:ring-1 focus:ring-black bg-zinc-100"
        />

        <button
          type="submit"
          className="p-3 px-6 pt-2 text-white bg-slate-800 rounded-full ml-0 mt-5 sm:mt-0 sm:ml-5 hover:bg-slate-900"
        >
          Generate
        </button>
      </form>

      <article className="pt-5 sm:px-12">
        {text.map((item, index) => {
          return (
            <p key={index} className="pt-3 text-lg sm:px-10">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
