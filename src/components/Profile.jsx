import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user, "user");
  return (
    <>{!user ? <div>Please Login</div> : <div>Welcome {user.username}</div>}</>
  );
};

export default Profile;
