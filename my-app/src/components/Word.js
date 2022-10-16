import React from  'react';
import "./Word.css";

const Word = props => (
    <p>Slowo po angielsku <strong>{props.english}</strong><br />Tlumaczenie: <strong>{props.polish}</strong></p>
)

export default Word