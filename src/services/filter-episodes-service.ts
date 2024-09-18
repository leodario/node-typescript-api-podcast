import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repoitoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async(
  podcastName: string | undefined
): Promise<FilterPodCastModel> =>{

  // define a interface de retorno
  let responseFromat: FilterPodCastModel = {
    statusCode: 0,
    body: []
  }

  // buscando os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repoitoryPodcast(queryString);

  // verifico se tem conteúdo
  responseFromat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
  
  responseFromat.body = data;

  return responseFromat;
}