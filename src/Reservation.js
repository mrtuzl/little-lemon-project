import React from 'react';


function Reservation() {

    const handleSubmit = () => {

    }
    return (
        <>
        <div className="reservationContainer" id='order'>
            <div className='reservation'>
                 <h1> Little Lemon </h1>
                <span> reservation </span>

                <form onSubmit={handleSubmit}>
                <div className='formTop'>

                 <label> First Name</label>
                 <input
                 className=""
                 type="text"
                 name="firstname"
                 placeholder="e.g. Jane"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 <label> Last Name</label>
                 <input
                 className=""
                 type="text"
                 name="lastname"
                 placeholder="e.g. Appleseed"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 <label> Email</label>
                 <input
                 className=""
                 type="mail"
                 name="mail"
                 placeholder="janeappleseed@gmail.com"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>
                 </div>


                 <div className='formMiddle'>

                 <label> Email</label>
                 <input
                 className=""
                 type="mail"
                 name="mail"
                 placeholder="janeappleseed@gmail.com"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 <label> Email</label>
                 <input
                 className=""
                 type="mail"
                 name="mail"
                 placeholder="janeappleseed@gmail.com"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 </div>

                 <div className='formBottom'> 
                 
                 <label> Email</label>
                 <input
                 className=""
                 type="mail"
                 name="mail"
                 placeholder="janeappleseed@gmail.com"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 <label> Email</label>
                 <input
                 className=""
                 type="mail"
                 name="mail"
                 placeholder="janeappleseed@gmail.com"
                 maxLength="28"
                 />
                 <p className=""> Can't be blank</p>

                 </div>

                <button> Reserve </button>
                 </form>
            </div>
        </div>

        </>
    );
  }
  
  export default Reservation;
  