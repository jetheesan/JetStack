import { useEffect, useState } from "react"
import { auth } from "../services/firebase"
import { db } from "../services/firebase";
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

export const SignupPage = () => { 
const [Username, setUsername] = useState("")
const [Password,setPassword] = useState("")
const [Fullname,setFullname] = useState("")
const [Email,setEmail] = useState("")


const handleUsernameChange = (event) => {
    setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault() 
    await createUserWithEmailAndPassword (auth,Email,Password).then((results =>{ 
        // Write to firestore 
        //redirect user to login
        console.log(results)
        
        setDoc(doc(db, "UserInformation", Email), {
            email: Email,
            fullname: Fullname,
            username: Username,
        }).then( () =>  console.log("Added User data")).catch (error => {console.log("failed to save user data",error)})




    }) ).catch(error => {
        // Notify user to try again 
        console.log(error)

    })


    // Firebase account  
    //Firebase Authentication 
    //Saving in FireBase
    //promises 

  }

return (
    <>

   <form onSubmit={handleSubmit}>

   <div className="inputGroup">
        <input
          type="text"
          required=""
          autoComplete="off"
          placeholder="Fullname"
          id="Fullname"
          value={Fullname}
          onChange={handleFullnameChange}
        />
        </div>
   <div className="inputGroup">
        <input
          type="text"
          required=""
          autoComplete="off"
          placeholder="Email"
          id="Email"
          value={Email}
          onChange={handleEmailChange}
        />
        </div>
        <br></br>
   <div className="inputGroup">
        <input
          type="text"
          required=""
          autoComplete="off"
          placeholder="Username"
          id="username"
          value={Username}
          onChange={handleUsernameChange}
        />
        </div>

        <div className="inputGroup">
        <input
          required=""
          autoComplete="off"
          placeholder="Password"
          id="password"
          type="password"
          value={Password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="password"></label>
        </div>
        <br />

        <input className="submit" role="submit-button" id="submit" type="submit" value="Submit" />

   </form>


    </>
) 

}
