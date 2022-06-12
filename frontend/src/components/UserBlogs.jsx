import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  console.log(id)
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:8000/api/blogs/user/628d47bc7baa0a30bd406dcf`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);

  return (
    <div>UserBlogs</div>
  )
}

export default UserBlogs