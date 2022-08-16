import style from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendListItem ({ status, avatar, name }) {
    return (
        <li className={style.item}>
            <span className={status ? style.online : style.offline}></span>
            <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool
}