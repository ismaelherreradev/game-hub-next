export type Genres = {
  genres: GenresClass;
};

export type GenresClass = {
  count: number;
  next: null;
  previous: null;
  results: Result[];
};

export type Result = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  added: number;
};
