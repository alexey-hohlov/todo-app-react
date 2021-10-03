import React from 'react';
import EditForm from './EditForm';
import edit from './icons/edit.svg'
import remove from './icons/remove.svg';

function TodoItem({item, index, editTodo, removeTodo, toggleTodo}){

    const [editItem, setEditItem] = React.useState(null);

    let styles = "";

    if(item.completed){
        styles = "completed";
    }

    return(
        <div>
            {index === editItem ? 
            (<EditForm item={item} setEditItem={setEditItem} editTodo={editTodo} index={index}/>) 
            : 
            (<div className="todo-item">
        
                <div className={`todo-title ${styles}`} onClick={()=>toggleTodo(index)}>
                {item.text}
                </div>
                <div className="controls">
                    <button onClick={()=>setEditItem(index)}>
                        <img className="icon" src={edit} alt="Edit"></img>
                    </button>
                    <button onClick={()=>removeTodo(index)}>
                        <img src={remove} alt="Remove"></img>
                    </button>
                </div>
            </div>)}
        </div>
    );
};           

export default TodoItem;