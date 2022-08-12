import style from './FriendList.module.css';

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