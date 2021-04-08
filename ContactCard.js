import React, {useState} from 'react';

const ContacrCard = (props)  =>{
    const [showAge, setShowAge] = useState(false);

    return (
        <div className="contact-card">
          <img src={props.avatarUrl} alt="profile" />
          <div className="user-details">
            <p><b>Name:</b> {props.name}</p>
            <p><b>Email:</b> {props.email}</p>
            <button onClick ={() => setShowAge(!showAge)}><b>Show Age</b></button>
            {showAge && <p><b>Age:</b> {props.age}</p>}
          </div>
        </div>
      );
}

export default ContacrCard;