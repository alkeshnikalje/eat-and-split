import { useState } from "react";
import Button from "./btn";
function SplitForm({ friend, onSplit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPaidTheBill, setWhoPaidTheBill] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplit(whoPaidTheBill === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>split a bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label>👫 {friend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoPaidTheBill}
        onChange={(e) => setWhoPaidTheBill(e.target.value)}
      >
        <option value="user">you</option>
        <option value="friend">{friend.name}</option>p
      </select>
      <Button>split bill</Button>
    </form>
  );
}

export default SplitForm;
