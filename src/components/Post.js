import { useState } from "react";

const Post = () => {
  const [likesCount, setLikesCount] = useState(0);

  //  useState gives you a state variable. takes one parameter(initial variable) and returns an array with only 2 elements: first element is variable that is currently being stored, and the second is a function to change that state

  const increaseLikes = () => {
    console.log("We're inside increaseLikes!");
    setLikesCount(likesCount + 1);
  };

  // const printName = (name) => {
  //   console.log("We're in printName!");
  //   console.log(`Hello, ${name}!`);
  // };

  // const printMessage = () => {
  //   printName("Ada Lovelace");
  //   console.log("Now, we're in printMessage!");
  // };

  return (
    <section>
      <button onClick={increaseLikes}>Like</button>
      <p>The number of likes is {likesCount}</p>
    </section>
  );
};

// can also take in an event parameter

export default Post;
