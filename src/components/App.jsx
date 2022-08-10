import Profile from './Profile/Profile';
import StatList from './Statistics/StatList';
import user from './Profile/user.json';
import data from './Statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatList title="Upload stats" stats={data} />     
    </div>
  );
};


