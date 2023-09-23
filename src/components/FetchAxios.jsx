import React, { useEffect, useState } from "react";
import { getJsonAxios } from "../fetchingdata/getJsonAxios";

export const FetchAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      const response = await getJsonAxios();
      setUsers(response);
      console.log(response);
    };
    fethData();
  }, []);
  return (
    <div className="my-20">
      <h1>Fetch Axios</h1>

      {users.map((user) => (
        <div key={user.id} className="border rounded-md border-slate-900 px-2">
          <h1>data ke {user.id} </h1>
          <p> {user.name} </p>
          <p> {user.email} </p>
          <p> {user.username} </p>
          <p> {user.phone} </p>
          <p> {user.website} </p>
          <h2 className="mt-2">Address</h2>
          <p> {user.address.street} </p>
          <p> {user.address.suite} </p>
          <p> {user.address.city} </p>
          <p> {user.address.zipcode} </p>
          <p> {user.address.geo.lat} </p>
          <p> {user.address.geo.lng} </p>
        </div>
      ))}
    </div>
  );
};
