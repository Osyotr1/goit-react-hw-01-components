import FriendListItem from './FriendListItem';

function FriendList ({ friends }) {
    console.log(friends);
    return (
    <ul className="friend-list">
        {friends.map(friend => (
            <FriendListItem key={friend.id} status={friend.isOnline} avatar={friend.avatar} name={friend.name} />
        ))}
    </ul>
    )
}

export default FriendList;