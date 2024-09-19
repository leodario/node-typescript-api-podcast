import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoitoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  // define o contrato
  let responseFromat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // busco os dados
  const data = await repoitoryPodcast();

  // verifico o tipo de resposta
  responseFromat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
    body: data,
  };

  return responseFromat;
};
