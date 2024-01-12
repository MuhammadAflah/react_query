import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

interface superHero {
  name: string;
}

const SuperHeros = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<superHero[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
    // .catch((error) =>{
    //     setError(error.message)
    //     setIsLoading(false)
    // })
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div>SuperHeros</div>
      {data?.map((hero) => {
        return <h4 key={hero?.name}>{hero?.name}</h4>;
      })}
    </div>
  );
};

export default SuperHeros;
