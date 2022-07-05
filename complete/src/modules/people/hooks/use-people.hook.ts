import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { IPeople } from "../data/interfaces/people.interface";

async function getAllPeople(): Promise<IPeople[]> {
  return axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      return response.data.results;
    })
    .catch((error: Error) => {
      return error.message;
    });
}

function usePeople(): UseQueryResult<IPeople[], Error> {
  return useQuery<IPeople[], Error>('GET_ALL_PEOPLE', getAllPeople);
}

export default usePeople;