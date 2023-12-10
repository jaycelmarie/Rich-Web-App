import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../githubSearch.css'; 

export const GithubSearch = ({ backTo }) =>  {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const userData = await response.json();

      setUserData(userData);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
        <div class="container">
            <form id="myForm" onSubmit={handleSubmit}>
            <div class="form-group">
                <input
                type="text"
                class="form-control"
                id="search"
                placeholder="Search Username"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" class="btn">
                Search User
                </button>
            </div>
            </form>
        </div>

        <div class="row">
            <div class="column">
            <h2>User Profile</h2>
            <div id="result">
                {userData && (
                <table>
                    <tbody>
                    <img src={userData.avatar_url || 'N/A'}/> 
                    <tr className="tbl1">
                        <th>Name: </th>
                        <td>{userData.name || 'N/A'}</td>
                    </tr>
                    <tr className="tbl1">
                        <th>Username: </th>
                        <td>{userData.login || 'N/A'}</td>
                    </tr>
                    <tr className="tbl1">
                        <th>Email: </th>
                        <td>{userData.email || 'N/A'}</td>
                    </tr>
                    <tr className="tbl1">
                        <th>Location: </th>
                        <td>{userData.location || 'N/A'}</td>
                    </tr>
                    <tr className="tbl1">
                        <th>Number of Gists: </th>
                        <td>{userData.public_gists || 'N/A'}</td>
                    </tr>
                    </tbody>
                </table>
                )}
            </div>
            </div>
        </div>

        <button id ="loginAndFactbtn">
        <Link to={backTo}>Back to Homepage</Link>
        </button>
    
    </>
    
  );
};

export default GithubSearch;
