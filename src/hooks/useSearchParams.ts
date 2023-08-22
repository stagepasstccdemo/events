import { useLocation } from "react-router-dom";

export const useSearchParams = (param: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(param);
};
