import Profile from './Profile/Profile';
import StatList from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transactions from './Transactions/TransactionHistory';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './Transactions/transactions.json';

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
      <FriendList friends={friends} />   
      <Transactions items={transactions} />
    </div>
  );
};


