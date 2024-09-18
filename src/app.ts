import * as http from "http";
import { getFilterEpisodes, getListEpisodes} from './controllers/podcasts-controllers';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse)=>{

  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]
 
  // listar podcasts
  if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
    await getListEpisodes(request, response);
  }

  // filtrar podcast
  if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
    await getFilterEpisodes(request, response); 
  }
}