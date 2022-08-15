import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import style from './FriendList.module.css';


function FriendList ({ friends }) {
    console.log(friends);
    return (
    <ul className={style.friendlist}>
        {friends.map(friend => (
            <FriendListItem key={friend.id} status={friend.isOnline} avatar={friend.avatar} name={friend.name} />
        ))}
    </ul>
    )
}

export default FriendList;


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool,
          id: PropTypes.number.isRequired
      })
    ),
  };