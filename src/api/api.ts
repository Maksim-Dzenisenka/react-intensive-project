import axios from 'axios';
import  { IEntity } from '../components/Episodes/episodesTypes';

const URL =
  'https://swapi.dev/api/films';

const instance = axios.create({
  baseURL: URL,
});

export const getData = (): Promise<IEntity>=> instance.get(URL).then((res) => res.data);