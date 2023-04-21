import { ProjectModel } from '../models';
import data from './data.json';

export const projectsList = data.projects as ProjectModel[];
export const tagLinks = new Map<string, string>(Object.entries(data.tagLinks));
