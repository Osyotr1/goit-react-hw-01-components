import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
    <div className={style.profile}>
        <div className={style.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={style.avatar}
           />
            <p className={style.name}>{username}</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.tag}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.tag}>Followers: </span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={style.tag}>Views: </span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={style.tag}>Likes: </span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

export default Profile;

Profile.propTypes = { 
    username: PropTypes.string, 
    location: PropTypes.string, 
    tag:PropTypes.string, 
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number, 
    likes: PropTypes.number
}