import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((n) => (<MovieItem title={n.title} />))}
    </ul>
  </section>
);
