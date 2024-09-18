import { IncomingMessage, ServerResponse } from 'http';
import{serviceListEpisodes} from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodCastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async(
  req: IncomingMessage, 
  res: ServerResponse
) => {

  const content = await serviceListEpisodes();

  res.writeHead(200,{'Content-Type': "application/json"});
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
  req: IncomingMessage,
  res: ServerResponse
) => { 
  
  const content: FilterPodCastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode,{'Content-Type': ContentType.JSON});

  res.end(JSON.stringify(content.body));
}