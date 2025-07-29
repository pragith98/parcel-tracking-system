import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import Button from "../components/Button";

function NotFoundPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div className="container flex items-center  px-6 py-12 mx-auto">
      <div>
        <p className="text-sm font-medium text-blue-500 ">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
          We can’t find that page
        </h1>
        <p className="mt-4 text-gray-500 ">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex items-center mt-6 gap-x-3">
          <Button variant="primary" onClick={navigateToHome}>
            Take me home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
