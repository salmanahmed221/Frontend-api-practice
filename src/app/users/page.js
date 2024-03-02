import React from "react";    //server-side data fetching
import Link from 'next/link'
async function GetData() {
  let mydata = await fetch("http://localhost:3000/api/getapistatic");
  mydata=await mydata.json();
  return mydata;
}
export default async function Users() {
  const comingdata = await GetData();
  return (
    <div>
      I am mapping data from the dummy API I made.
      
        {
        comingdata.map((item) => (
          <div className="user-item">
            <span><Link href={`/users/${item.id}`}>{item.name}</Link></span>
            <span><Link href={`users/${item.id}/update`}>Edit</Link></span>
            </div>
        ))}
     
    </div>
  );
}
