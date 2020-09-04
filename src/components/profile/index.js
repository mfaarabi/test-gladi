import React, { useState } from "react";

const Profile = (props) => {
  const [isFollowed, setIsFollowed] = useState(true);

  return (
    <>
      <div>Profile Picture</div>
      <h1>@{props.username}</h1>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
    </>
  );
};

export default Profile;
