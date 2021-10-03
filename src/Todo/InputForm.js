import React from 'react';

function InputForm({addTodo}){

    const [newItem, setNewItem] = React.useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(newItem === ""){
            return;
        };

        addTodo(newItem);

        setNewItem("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="input-form" type="text" placeholder="Type and press Enter"
            value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
        </form>
    );
};

export default InputForm;