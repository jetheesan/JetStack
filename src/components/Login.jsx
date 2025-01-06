
import { useEffect, useState } from "react"
import { auth } from "../services/firebase"
import { db } from "../services/firebase";
import {  signInWithEmailAndPassword  } from 'firebase/auth';
import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";


export const LoginPage = () => { 
    const [Password,setPassword] = useState("")
    const [Email,setEmail] = useState("")

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    

    const handleSubmit = async (event) => {
        event.preventDefault() 
        await signInWithEmailAndPassword (auth,Email,Password).then((results =>{ 
                // Write to firestore 
                //redirect user to login
                console.log("sign in sucesss")
                const docRef = doc(db, "UserInformation", Email);
                getDoc(docRef) .then( (docSnap) => {
                    if (docSnap.exists()) {
                        console.log("Document data:", docSnap.data());
                      } else {
                        console.log("No such document!");
                      }      


                } ).catch (error => {console.log("failed to fetch user data",error)})
                ;


     

                
        
            }) ).catch(error => {
                // Notify user to try again 
                console.log(error)
        
            })}

return (


<form onSubmit={handleSubmit}>


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

)
}