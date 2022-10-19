import React from 'react';

const ButtonFetchUsers = (props) => {
    return ( 
        <button style={{
            padding: '20px 20px',
            border: 'solid black',
            backgroudColor: 'white',
            margin: 20
        }} onClick={props.click}>Dodaj uzytkownika</button>
     );
}
 
export default ButtonFetchUsers;
