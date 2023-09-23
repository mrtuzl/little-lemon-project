import React from 'react';
import { useState } from 'react';
import CallToAction from './CallToAction';
import validator from "validator";

function Reservation() {

    const[reservation, setReservation] = useState();
    const [submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (errorName === false && errorLastName === false && errorMail === false && 
            errorDate === false && errorGuest === false && errorOccasion === false) 
            {
            setSubmit(true)
            } else {
            setSubmit(false)
            }
        }
    
    
    const[name, setName] = useState("");  
    const[lastName, setLastName] = useState("");
    const[mail, setMail] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[guest, setGuest] = useState("");
    const[occasion, setOccasion] = useState("");

    const[errorName, setErrorName] = useState(true);
    const[errorLastName, setErrorLastName] = useState(true);
    const[errorMail, setErrorMail] = useState(true);
    const[errorDate, setErrorDate] = useState(true);
    const[errorTime, setErrorTime] = useState(true);
    const[errorGuest, setErrorGuest] = useState(true);
    const[errorOccasion, setErrorOccasion] = useState(true);

    function changeName(e) {
        setName(e.target.value)
        if (name.length < 1) {
            setErrorName(true)
        } 
        else {
            setErrorName(false)
        }
    }

    function changeLastName(e) {
        setLastName(e.target.value)
        if (lastName.length < 1) {
            setErrorLastName(true)
        } 
        else {
            setErrorLastName(false)
        }
    }
    function changeMail(e) {
        setMail(e.target.value);
       
        if (validator.isEmail(mail)) {
            setErrorMail(false)
        } 
        else {
            setErrorMail(true)
        }
    }

    function changeDate(e) {
        setDate(e.target.value)
        if (date === " ") {
            setErrorDate(true)
        } 
        else {
            setErrorDate(false)
        }
    }

    function changeTime(e) {
        setTime(e.target.value)
        if (time === " ") {
            setErrorTime(true)
        } 
        else {
            setErrorTime(false)
        }
    }

    function changeGuest(e) {
        setGuest(e.target.value)
        if (guest === " ") {
            setErrorGuest(true)
        } 
        else {
            setErrorGuest(false)
        }
    }

    function changeOccasion(e) {
        setOccasion(e.target.value)
        if (occasion === " ") {
            setErrorOccasion(true)
        } 
        else {
            setErrorOccasion(false)
        }
    }

    const handleReserve = () => {
        setReservation(!reservation);
        console.log(reservation)
    }


    if (reservation === true) {
        
        return (
            <> 
                <CallToAction/>
            </>
        );
    } else if(submit === false){
    return (
        <>
        <div className="reservationContainer" id='order'>
            <div className='reservation'>
                 <h1> Little Lemon Reservation </h1>
                
                <form onSubmit={handleSubmit}>
                <div className='formTop'>

                <div className='formItem'> 
                 <label> First Name</label>
                 <input
                 className="input"
                 type="text"
                 name="firstname"
                 placeholder="e.g. Jane"
                 maxLength="28"
                 onChange={changeName}
                 />
                 <p className={`hide ${errorName ? "show" : "hide"}`}> Must be more than 2 characters </p>
                 </div>

                 <div className='formItem'> 
                 <label> Last Name</label>
                 <input
                 className="input"
                 type="text"
                 name="lastname"
                 placeholder="e.g. Appleseed"
                 maxLength="28"
                 onChange={changeLastName}
                 />
                 <p className={`hide ${errorLastName ? "show" : ""}`}> Must be more than 2 characters</p>
                 </div>

                 <div className='formItem'> 
                 <label> Email</label>
                 <input
                 className="input"
                 type="mail"
                 name="mail"
                 placeholder="janeapplsd@gmail.com"
                 maxLength="28"
                 onChange={changeMail}
                 />
                  <p className={`hide ${errorMail ? "show" : ""}`}> Invalid mail address</p>
                 </div>
                 </div>


                 <div className='formMiddle'>

                 <div className='formItem'> 
                 <label> Date </label>
                 <input
                 className="input select"
                 type="date"
                 name="date"
                 placeholder="10/10/2023"
                 onChange={changeDate}
                 value={date}
                 />
                 <p className={`hide ${errorDate ? "show" : ""}`}> Date must be selected</p>
                </div>

                <div className='formItem time'> 
                 <label> Time </label>
        
                 <select
                 className="input select"
                 name="time"
                 onChange={changeTime}
                 value={time}>
                    <option value="-" > - </option>
                    <option value="18:00" > 18:00 </option>
                    <option value="18:30"> 18:30  </option>
                    <option value="19:00"> 19:00  </option>
                    <option value="19:30"> 19:30  </option>
                    <option value="20:00"> 20:00  </option>
                    <option value="20:30"> 20:30  </option>
                    <option value="21:00"> 21:00  </option>
                    <option value="21:30"> 21:30  </option>
                    <option value="22:00"> 22:00 </option>
                    <option value="22:30"> 22:30 </option>
                    <option value="23:00"> 23:00  </option>
                    <option value="23:30"> 23:30  </option>
                   
                </select>
             
                <p className={`hide ${errorTime ? "show" : ""}`}> Time must be selected</p>


                </div>
                </div>

                 <div className='formBottom'> 
                 
                 <div className='formItem'> 
                 <label> Number of Guests</label>
                 <select
                 className="input select"
                 name="guest"
                 onChange={changeGuest}
                 value={guest}>
                    <option value="-"> - </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                </select>
                <p className={`hide ${errorGuest ? "show" : ""}`}> Number of guests must be selected</p>
                 </div>

                 <div className='formItem'> 
                 <label> Occasion </label>
                 <select
                 className="input select"
                 name="Occasion"
                 onChange={changeOccasion}
                 value={occasion}
                 >
                    <option value="-"> - </option>
                    <option value="Birthday"> Birthday </option>
                    <option value="Engagement"> Engagement </option>
                    <option value="Anniversary"> Anniversary </option>
                    <option value="Wedding"> Wedding </option>
                </select>
                <p className={`hide ${errorOccasion ? "show" : ""}`}> Occasion must be selected</p>
                </div>
                <button className='btn btn-sm'> Reserve </button>
                <button className='btn btn-sm'  onClick={handleReserve}> Cancel </button>
                 </div>

               
                 </form>
            </div>
        </div>

        </>
    );
  }
  else {
    return (
        <>
        <div className="reservationContainer" id='order'>
            <div className='reservation'>
                  <h1 className='infoh1'> Little Lemon Reservation </h1>
                 <div className='info'> 
                 
                 <p> Dear <span> {name} {lastName}, </span> your reservation is confirmed!</p>
                 <p> Date: <span>{date}</span> </p>
                 <p> Time: <span>{time}</span> </p>
                 <p> Guests: <span>{guest}</span> </p>
                 <p> Occasion: <span>{occasion}</span> </p>
                 </div>
                 <button className='btn' onClick={handleReserve}> Back to Homepage </button>
                 </div>
                 </div>
  </>
  )

}
}
  export default Reservation;
  