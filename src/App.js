import React, { useState } from 'react';
import UserDetails from './components/UserDetails/index';
import RepositoryList from './components/RepositoryList/index';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [repositories, setRepositories] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      setUserDetails({
        avatarUrl: userData.avatar_url,
        name: userData.name,
        location: userData.location,
        bio: userData.bio,
      });

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoResponse.json();
      setRepositories(repoData);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
      e.preventDefault();
    }
  };

  return (
    <div className="container">
      <form>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button type="button" onClick={fetchData}>
          Get User Data
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userDetails && <UserDetails {...userDetails} />}
      {repositories.length > 0 && <RepositoryList repositories={repositories} />}
    </div>
  );
}

export default App;