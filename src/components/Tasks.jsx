import React, { useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./Tasks.css";
import EditTask from "./EditTask";


function Tasks({ tasks, setTasks, removeTask }) {

  const [editContent, setEditContent] = useState('')

  const [showEdit, setShowEdit] = useState(false);
  

  const _handleClick = (id) => {
    let task = tasks.find((taskObj) => {
      return id === taskObj.id;
    });
    console.log("handleclick fn ln 15", task.content)
    setEditContent(task.content)
    setShowEdit(true);
    return task;
  };


  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <ListGroup className="singletask">
        {tasks.map((task, index) => (
          <ListGroupItem key={index}>
            {task.content}
            <Button
              variant="primary"
              id="editbtn"
              onClick={() => _handleClick(task.id)}>
              Edit
            </Button>
            <Button
              variant="danger"
              type="button"
              id="deletebtn"
              onClick={() => removeTask(task.id)}>
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
      {showEdit ? (
        <ListGroup>
          <ListGroupItem>
            <EditTask  tasks={tasks} setTasks={setTasks} editContent={editContent} setEditContent={setEditContent} />
          </ListGroupItem>
        </ListGroup>
      ) : null}
    </div>
  );
}

export default Tasks;
