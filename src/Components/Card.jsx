import React,{useState} from "react";
import $ from "jquery";
import "./Style.css";

const Card = () => {

   const [cards, setCards] = useState([]);
   
  var userDetails = JSON.parse(localStorage.getItem("userDetails") || "[]");
  console.log(userDetails, "res");

  const removeData = () => {
    localStorage.removeItem("userDetails");
    window.location.reload();
  };
  // $(".hideclass").hide();
  return (
    <>
      <div className="flex">
        {userDetails.map((item, i) => {
          return (
            <div className="container" key={i}>
              <div className="card">
                <div className="card-body">
                  <p>Card No: {i+1}</p>
                  <p>Name: {item.name}</p>
                  <p className="hideclass">Phone: {item.phone}</p>
                  <p className="hideclass">Address: {item.address}</p>
                  <p>Email: {item.email}</p>
                  <button className="btn btn-danger" onClick={removeData}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
