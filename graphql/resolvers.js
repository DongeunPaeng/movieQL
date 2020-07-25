// graphql 파일은 description이고, 실제로 일을 수행하는 것은 resolver.js이다.
import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
