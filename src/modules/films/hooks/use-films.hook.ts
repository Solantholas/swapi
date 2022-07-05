import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import IFilm from "../components/films-table/interfaces/film.interface";

async function getAllFilms() {
  return axios.get('https://swapi.dev/api/films/')
    .then((response) => {
      return response.data.results;
    })
    .catch((error: AxiosError) => {
      return error.message;
    });
}

function useFilms() {
  return useQuery<IFilm[], Error>("GET_ALL_FILMS", getAllFilms);
}

export default useFilms;