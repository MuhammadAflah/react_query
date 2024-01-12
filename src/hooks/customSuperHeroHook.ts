import { useQuery, useMutation } from "react-query";
import axios from "axios";

interface superHero {
  name: string;
  id: number;
}

const fetchSuperHeros = () => {
  return axios
    .get("http://localhost:4000/superheroes")
    .then((response) => response.data);
};

const addSuperHero = (hero: any) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroData = (onSuccess: any, onError: any) => {
  return useQuery<superHero[]>("super_heros", fetchSuperHeros, {
    //cacheTime: 5000,      /*this is the cache time and we can set the time as we want*/

    //staleTime: 30000 /*the stale time means when we fetch the data and back to different route and agin back to this route in the networktab we cant see the request but the data is displayed this is by getting the data from cache default stale time is 0 seconds*/,

    //refetchInterval: 2000 /*it helps to refetch the function automatically in every 2 sec. but the refetches is paused when user focused to resolve this issue we can use another option (refetchintervalinbackground:true)*/,

    //refetchIntervalInBackground: true,

    //enabled: false, /*by keeping it as false it does not shows the data on the window */

    onSuccess,
    onError,

    //data tranformation ⬇️
    // select: (heros) => {
    //   const superHeroName = heros?.map((hero) => hero.name);
    //   return superHeroName;
    // },
  });
};

export const useNewSuperHero = () => {
  return useMutation(addSuperHero);
};
