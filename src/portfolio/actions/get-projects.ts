import { portafolioApi } from "../../api/api";
import { Project } from "../types/project";

interface ProjectsResponse {
  project: {
    projects: Project[];
    total: number;
    page: number;
    limit: number;
  };
}


export const getProjects = async (): Promise <Project[]> => {
  const { data } = await portafolioApi.get<ProjectsResponse>('/projects');
  return data?.project?.projects ?? [];
};