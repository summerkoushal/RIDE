import React from "react";

export default function PickDrop() {
  return (
    <div className="PickDrokpContainer">
      <input
        className="PickDropItem"
        type="text"
        placeholder="Pick-up location"
      />
      <input
        className="PickDropItem"
        type="text"
        placeholder="Drop-off location"
      />
      <input
        type="text"
        className="PickDropItem"
        placeholder="Today"
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
      <input
        // type="text"
        className="PickDropItem"
        placeholder="9:10 PM"
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "time")}
        onBlur={(e) => (e.target.type = "text")}
      />
      <br /> <button className="btn btn-danger PickDropItem">Search</button>
    </div>
  );
}
