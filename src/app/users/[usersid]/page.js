// import React from 'react'
// async function getData(id) {
//     let mydata = await fetch(`http://localhost:3000/api/getapistatic${id}`);
//     mydata=await mydata.json();
//     return mydata;
//   }
// export default async function UserDetail({params}) {
//     console.log(params);
//     const comingdata = await getData(params.usersid);
//     console.log(comingdata)
//   return (
//     <div>
//         <h1>This is User Detail Page </h1>
//     </div>
//   )
// }


const getData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/getapistatic/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    // You might want to throw the error here or return an error object
    throw error;
  }
};

export default async function UserDetail({ params }) {
  try {
    const comingdata = await getData(params.usersid);

    if (!comingdata || !comingdata.result) {
      // Handle the case where the data is undefined or doesn't have a 'result' property
      throw new Error("Invalid data format");
    }

    console.log(comingdata);

    return (
      <div>
        <h1>This is User Detail Page</h1>
        {comingdata.result.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user.id}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    // Handle errors, you might want to display an error message on the page
    console.error(error);
    return <div>Error loading data</div>;
  }
}
