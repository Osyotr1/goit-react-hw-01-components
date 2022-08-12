import style from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendListItem ({ status, avatar, name }) {
    console.log(status);
    return (
        <li className="item">
            <span className={status ? style.online : style.offline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool
}