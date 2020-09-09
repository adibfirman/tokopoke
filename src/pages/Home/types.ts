export type ResultsType = { name: string; url: string; id: number };

export interface IResultAPI {
  count: number;
  next: string;
  previous: string;
  results: Array<ResultsType>;
}
