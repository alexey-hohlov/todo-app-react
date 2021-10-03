import React from 'react';

function EditForm({item, index, setEditItem, editTodo}){

    const [editedText, setEditedText] = React.useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(editedText === ""){
            setEditItem(null);
            return;
        };
        
        editTodo(index, editedText);

        setEditItem(null);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input className="edit-form" type="text" placeholder="Edit and press Enter"
            defaultValue={item.text}
            onChange={(event)=>setEditedText(event.target.value)}/>
        </form>
    );
};

export default EditForm;