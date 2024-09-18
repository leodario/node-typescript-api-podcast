import { StatusCode } from './../utils/status-code';
import { PodcastModel } from './podcast-model';

export interface FilterPodCastModel{
  statusCode: number,
  body: PodcastModel[]
}