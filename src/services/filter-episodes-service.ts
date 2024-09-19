import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoitoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // define a interface de retorno
  let responseFromat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // buscando os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repoitoryPodcast(queryString);

  // verifico se tem conteúdo
  responseFromat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFromat;
};
