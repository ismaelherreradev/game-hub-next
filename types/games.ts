export type Games = {
  games: GamesClass;
};

export type GamesClass = {
  count: number;
  next: string;
  previous: null;
  results: Result[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: Filters;
  nofollow_collections: string[];
};

export type Filters = {
  years: FiltersYear[];
};

export type FiltersYear = {
  from: number;
  to: number;
  filter: string;
  decade: number;
  years: YearYear[];
  nofollow: boolean;
  count: number;
};

export type YearYear = {
  year: number;
  count: number;
  nofollow: boolean;
};

export type Result = {
  id: number;
  slug: string;
  name: string;
  released: Date;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game: null;
  reviews_count: number;
  saturated_color: Color;
  dominant_color: Color;
  platforms: PlatformElement[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: null;
  tags: Genre[];
  esrb_rating: EsrbRating;
  short_screenshots: ShortScreenshot[];
};

export type AddedByStatus = {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
};

export enum Color {
  The0F0F0F = '0f0f0f',
}

export type EsrbRating = {
  id: number;
  name: string;
  slug: string;
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  domain?: Domain;
  language?: Language;
};

export enum Domain {
  AppsAppleCOM = 'apps.apple.com',
  EpicgamesCOM = 'epicgames.com',
  GogCOM = 'gog.com',
  MarketplaceXboxCOM = 'marketplace.xbox.com',
  MicrosoftCOM = 'microsoft.com',
  NintendoCOM = 'nintendo.com',
  PlayGoogleCOM = 'play.google.com',
  StorePlaystationCOM = 'store.playstation.com',
  StoreSteampoweredCOM = 'store.steampowered.com',
}

export enum Language {
  Eng = 'eng',
}

export type ParentPlatform = {
  platform: EsrbRating;
};

export type PlatformElement = {
  platform: PlatformPlatform;
  released_at: Date | null;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
};

export type PlatformPlatform = {
  id: number;
  name: string;
  slug: string;
  image: null;
  year_end: null;
  year_start: number | null;
  games_count: number;
  image_background: string;
};

export type Requirements = {
  minimum: string;
  recommended?: string;
};

export type Rating = {
  id: number;
  title: Title;
  count: number;
  percent: number;
};

export enum Title {
  Exceptional = 'exceptional',
  Meh = 'meh',
  Recommended = 'recommended',
  Skip = 'skip',
}

export type ShortScreenshot = {
  id: number;
  image: string;
};

export type Store = {
  id: number;
  store: Genre;
};
