import Friend from "./friend";
function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.name} />
      ))}
    </ul>
  );
}

export default FriendList;
