import { repoitoryPodcast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async() =>{
  const data = await repoitoryPodcast();

  return data;
}