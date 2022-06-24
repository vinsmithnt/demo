import { LIST } from '../constants';

export const setList = (payload: any) => {
  return { type: LIST, payload: payload };
};
