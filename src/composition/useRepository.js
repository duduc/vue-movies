import { movieRepository } from "../services/movie-repository";

export default function (props) {
  function getItems() {
    return movieRepository.get(props.type)
  }
  return {
    getItems,
  };
}
