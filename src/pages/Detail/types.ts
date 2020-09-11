export interface IResponseAPI {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
}
