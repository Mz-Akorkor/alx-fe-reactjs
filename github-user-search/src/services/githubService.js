import axios from "axios";

const advancedSearchUsers = async (username, location, minRepos, page = 1) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=10`;

  const response = await axios.get(url);
  return response.data;
};

export default advancedSearchUsers;