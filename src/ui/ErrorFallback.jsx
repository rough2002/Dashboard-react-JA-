import Heading from "./Heading";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-100 rounded-md p-12 max-w-4xl text-center flex flex-col items-center">
        <Heading as="h1" className="mb-4">
          Something went wrong 🧐
        </Heading>
        <p className="font-sono mb-8 text-gray-500">{error.message}</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center justify-center w-40 h-12"
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </main>
  );
};

export default ErrorFallback;
