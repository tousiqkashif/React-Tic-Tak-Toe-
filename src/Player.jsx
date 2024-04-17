import React, { useState } from 'react'

const Player = ({ iniName, Symbol, isActive, onChangeName }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [nameOfPlayer, setnameOfPlayer] = useState(iniName);

    function handleEdit() {
        setIsEdit(recallEdit => !recallEdit);
        if(isEdit){
        onChangeName(Symbol, playerName)
        }
    }


    function handleChange(event) {
        setnameOfPlayer(event.target.value);
        //console.log("change")

    }

    let playerName = <span className='player-name'>{nameOfPlayer}</span>
    let btn = 'Edit';


    if (isEdit) {

        playerName = <input type='text' value={nameOfPlayer} onChange={handleChange} />;
        btn = 'Save';

    }

    return (
        <>
            <li className={isActive ? 'Active' : undefined
        }>
                <span>
                    {playerName}
                    <span className='player-symbol'>{Symbol}</span>
                </span>
                <button onClick={handleEdit}>{btn}</button>
            </li>
        </>
    )
}

export default Player;
