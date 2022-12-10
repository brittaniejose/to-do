import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import "./To-Do.css";

function ToDo({saveTasksProp}) {
  const [taskContent, setTaskContent] = useState("");

  const createTask = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      content: taskContent,
    }
    console.log(newTask)
    saveTasksProp(newTask)
    
  };

  return (
    <Container>
      <Container>
        <h1>To-Do</h1>
      </Container>
      <Container >
        <Form onSubmit={createTask} className="formItems">
          <Form.Control
            type="text"
            placeholder="Search or Add Task Here"
            id="taskInput"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
          />

          <Button variant="dark" id="searchbtn">
            Search
          </Button>
          <Button variant="outline-info" type="submit">
            Add Task
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default ToDo;
