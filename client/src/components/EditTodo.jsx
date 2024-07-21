import React, { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `https://todowithusers.onrender.com/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json", token:localStorage.token },
          body: JSON.stringify(body)
        }
      );
      
      window.location = "/dashboard";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" name="" id="" value={description}  onChange={e => setDescription(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={updateDescription}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default EditTodo;
