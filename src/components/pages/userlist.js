// import React, { useState } from "react";
// import BackgroundImage from '../../assets/images/bg.png'

// function VehiclesTable() {
//   function PostData(userData) {
//     let BaseUrl = "https://reqres.in/api/login";
//     console.log("userData", userData);
//     return new Promise((resolve, reject) => {
//     fetch(BaseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "token": "QpwL5tke4Pnpja7X4",
//         body: JSON.stringify(userData)
//       }
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         resolve(responseJson);
//       })
//       .catch(error => {
//         reject(error);
//       });
//     });
//     }
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const submitForm = e => {
//   e.preventDefault();
//   PostData(email, password).then(result => {
//     console.log(result);
//   });
//   console.log("email", email);
//   console.log("password", password);
//   };
//   return (
//     <div className="search_box">
//       <form onSubmit={submitForm}>
//         <input
//           name="name"
//           type="text"
//           placeholder="email"
//           onChange={e => setEmail(e.target.value)}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="search"
//           onChange={e => setPassword(e.target.value)}
//         />
//         <input type="submit" value="login" onChange={VehiclesTable}/>
//       </form>
//     </div>
//   );
//   }
//   export default VehiclesTable;
  