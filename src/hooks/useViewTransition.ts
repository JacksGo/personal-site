import { useNavigate } from "react-router-dom";

const useViewTransition = () => {
  const navigate = useNavigate();

  return (route: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(route);
      });
    } else {
      navigate(route);
    }
  }
}

export default useViewTransition;