const URL = process.env.REACT_APP_API_URL;

export const Get_Detail = (name: string) => `${URL}/pokemon/${name}`;
