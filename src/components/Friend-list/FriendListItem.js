import PropTypes from 'prop-types';
import s from './FriendList.module.css';
// console.log(s)
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.onLine : s.offLine}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt="Аватар пользователя"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
