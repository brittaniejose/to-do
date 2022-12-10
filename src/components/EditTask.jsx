import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function EditTask({editContent, setEditContent, tasks, setTasks}) {
  
  const onSave = (e, id) => {
    e.preventDefault();

    
  }

  const updateTaskObj = (editcontent, id) => {


  }
  const updatedTaskObj = tasks.map(taskObj => {
    if (taskObj.id === id) {
      return {editContent, id}
    }
    console.log(taskObj, "taskObj @ updatedTaskObj")
    console.log("save edited task", taskObj)
    console.log(editContent, "editContent state")
    // setTasks(updatedTaskObj)
    
  })

  return (
    <div>
      <Form onSubmit={onSave}>
        <Form.Control value={editContent} onChange={(e)=> setEditContent(e.target.value)}/>
        <Button variant="success" type="submit">
          Save
        </Button>
        <Button variant="light">
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default EditTask;
