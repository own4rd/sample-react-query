import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Repository } from "../types/Repository";
import { useRepositories } from "../services/hooks/useRepositories";

export function Repositories() {
  const { data, isFetching } = useRepositories();

  return (
    <ul>
      {isFetching && <p>Loading ...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`repositories/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
