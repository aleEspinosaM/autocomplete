export type StatusCaller = 'idle' | 'success' | 'pending' | 'error';

export interface InfoResponse {
  count: number;
  pages: number;
  next: string;
  prev: string | null
}

export interface BasicLocation {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: BasicLocation;
  location: BasicLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}


export interface CharacterResponse { 
  info: InfoResponse;
  results: Character[];
}

// 