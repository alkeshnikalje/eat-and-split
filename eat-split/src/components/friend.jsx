import Button from "./btn";
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} ${Math.abs(friend.balance)}{" "}
        </p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
