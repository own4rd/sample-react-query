import { useParams } from "react-router-dom";
import { queryClient } from "../services/queryCliente";
import { Repository } from "../types/Repository";

export function Repo() {
  async function handleChangeRepositoryDescription() {
    // CALL API
    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "Testing" };
        }
        return repo;
      });

      queryClient.setQueryData('repos', nextRepos);
    }
  }

  const params = useParams();
  const currentRepository = params["*"] as string;
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Change Description</button>
    </div>
  );
}
