// if page not found redirect to "/"
export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => window.location.href = "/"}>
        Go to Home
      </button>
    </div>
  );
}