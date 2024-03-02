'use client'
import {React,useState} from 'react'

// export default function Post() {
//     const [name,setName]=useState("");
//     const [age,setAge]=useState("");
//     const [email,setEmail]=useState("");
//     const addUser=async()=>{
// let response=await fetch('http://localhost:3000/api/getapistatic',{
//   method:"Post",
//   body:JSON.stringify({name,age,email})
// })
// response=await response.json();
// if(response.success==true){
//   alert("New User has been created")
// }
// else{
//   alert("Oops! there is some issue.")
// }
// console.log(response)
//     }
//   return (
//     <div className='add-user'>
//         <h1>Post API Integration with Form</h1>
//         <input type='text' value={name} placeholder='Enter Name:' onChange={(e)=>{setName(e.target.value)}} className='input-field'/>
//         <input type='text' value={age} placeholder='Enter Age:'  onChange={(e)=>{setAge(e.target.value)}} className='input-field'/>
//         <input type='text' value={email} placeholder='Enter Email:' onChange={(e)=>{setEmail(e.target.value)}} className='input-field'/>
//         <button className='btn' onClick={addUser}>Add User</button>
//         <div>
//         <h2>List of users you are adding</h2>
//         <ul>{}</ul>
//         </div>
//     </div>
//   )
// }



export default function Post() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  
  const addUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/getapistatic', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, email }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success === true) {
        alert('New User has been created');

        // Update local state with the new user without fetching all users
        setUsers(prevUsers => [...prevUsers, { name, age, email }]);
      } else {
        alert('Oops! There is some issue.');
      }

      console.log(responseData);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Oops! There was an error.');
    }
  };

  return (
    <div className='add-user'>
      <h1>Post API making</h1>
      <input type='text' value={name} placeholder='Enter Name:' onChange={(e) => setName(e.target.value)} className='input-field' />
      <input type='text' value={age} placeholder='Enter Age:' onChange={(e) => setAge(e.target.value)} className='input-field' />
      <input type='text' value={email} placeholder='Enter Email:' onChange={(e) => setEmail(e.target.value)} className='input-field' />
      <button className='btn' onClick={addUser}>Add User</button>

      {/* Display the list of users */}
      <div>
        <h2>List of Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

