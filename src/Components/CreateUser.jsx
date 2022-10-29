import React,{useState,useEffect} from 'react'
import './createuser.css';
const CreateUser = () => {

  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [phone, setPhone] = useState("");  
  const [address, setAddress] = useState("");  


const saveData=()=>{
 var userDetails=JSON.parse(localStorage.getItem("userDetails") || "[]");  //string to object
 var details={
  name: name,
  email:email,
  phone:phone,
  address:address,
 }
 userDetails.push(details);
 localStorage.setItem("userDetails",JSON.stringify(userDetails)); //object to string
//  localStorage.setItem("details",JSON.stringify(email));
}

// let res=localStorage.getItem("userDetails");
// console.log(res);
// console.log("data",localStorage.getItem("userDetails"));
  return (
    <>
      <form>
        <h4>Create User</h4>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Enter Your Phone"
            value={phone}
            className="form-control"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Your Address"
            value={address}
            className="form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button onClick={saveData} className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <h1>{localStorage.getItem("name")}</h1> */}
    </>
  );
}

export default CreateUser