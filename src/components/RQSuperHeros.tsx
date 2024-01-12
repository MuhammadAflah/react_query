import { useState } from "react";
import {
  useNewSuperHero,
  useSuperHeroData,
} from "../hooks/customSuperHeroHook";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface superHero {
  name: string;
  id: string;
}

const RQSuperHeros = () => {
  const [name, setName] = useState<string>("");
  const [alterEgo, setAlterEgo] = useState<string>("");

  const onSuccess = () => {
    console.log("success msg after data fetching");
  };
  const onError = () => {
    console.log("error msg after encoutering error!");
  };
  const {
    data: heros,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useSuperHeroData(onSuccess, onError);

  console.log(isFetching);

  const { mutate: addHero } = useNewSuperHero();

  const handleHeroAdd = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading) {
    return <h3>loading ...</h3>;
  }

  if (isError) {
    return <h3>Something went wrong!!</h3>;
  }

  return (
    <div>
      <Navbar />
      <div>RQSuperHeros</div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleHeroAdd}>Add Hero</button>
      </div>
      {/*  */}
      {/* fetch data while using a event */}
      {/* <button onClick={refetch}>Heros</button> */}{" "}
      <div>
        {heros?.map((hero) => (
          <div key={hero.id}>
            <Link to={`/rq-super-heros/${hero.id}`}>{hero?.name}</Link>
          </div>
        ))}
      </div>
      {/* the below line code is a part of data transformation */}
      {/* {heros?.map((heroName: any) => {
        return <h3 key={heroName}>{heroName}</h3>;
      })} */}
    </div>
  );
};

export default RQSuperHeros;
