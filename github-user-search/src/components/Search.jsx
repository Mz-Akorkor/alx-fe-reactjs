import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
    } catch (err) {
      setError("Something went wrong...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced GitHub Search</h2>

      <form onSubmit={handleSearch} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Location (e.g., Ghana)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {/* results */}
      <div className="mt-6">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-4 mb-4 border rounded shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a
                className="text-blue-600 underline"
                href={user.html_url}
                target="_blank"
              >
                View Profile
              </a>
              <p className="text-sm text-gray-600">
                Score: {user.score}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
