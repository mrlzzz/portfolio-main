import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

type ErrorMessage = {
  statusText: string;
  message: string;
  data: string;
  status: number;
};

const ErrorPage = () => {
  const error: unknown = useRouteError();

  console.error(error);

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="mx-auto my-10 flex w-fit flex-col border border-black p-4">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>
              {(error as ErrorMessage).statusText ||
                (error as ErrorMessage).message}
            </i>
          </p>
          <p>{(error as ErrorMessage).data}</p>
          <p>Error code: {(error as ErrorMessage).status}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
