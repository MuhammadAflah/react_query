import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

interface HeroDetails {
  name: string;
  alterEgo: string;
}

const RQSuperHeroSingle = () => {
  const { id } = useParams();
  const {
    data: heroData,
    isLoading,
    isError,
    error,
  } = useQuery<HeroDetails>(["heroDetails", id], async () => {
    const response = await axios.get(`http://localhost:4000/superheroes/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <h3>Loading superhero data...</h3>;
  }

  if (isError) {
    return <h3>Error: </h3>; // Display the error message
  }

  return (
    <div>
      <Navbar />
      <div>{heroData?.name}</div>
      <div>{heroData?.alterEgo}</div>
    </div>
  );
};

export default RQSuperHeroSingle;
