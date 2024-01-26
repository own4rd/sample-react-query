import { Repository } from "../../types/Repository";
import { useQuery } from "react-query";
import { api } from "../api";

export async function getRepositories(): Promise<Repository[]> {
  const { data } = await api.get("/users/own4rd/repos");

  const repositories: Repository[] = data.map((repository: Repository) => {
    return {
      full_name: repository.full_name,
      description: repository.description,
    };
  });

  return repositories;
}

export function useRepositories() {
  return useQuery<Repository[]>("repos", () => getRepositories(), {
    staleTime: 1000 * 60,
  });
}
