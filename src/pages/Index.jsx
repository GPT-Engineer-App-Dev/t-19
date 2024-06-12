import React, { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Todo App</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new task" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button onClick={handleAddTask} colorScheme="green">Add Task</Button>
        </HStack>
        <VStack spacing={3} width="100%">
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox 
                isChecked={task.completed} 
                onChange={() => handleToggleComplete(index)}
              >
                <Text as={task.completed ? 's' : ''}>{task.text}</Text>
              </Checkbox>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => handleDeleteTask(index)} 
              />
            </HStack>
          ))}
        </VStack>
        {tasks.length === 0 && <Text>No tasks added yet.</Text>}
      </VStack>
    </Container>
  );
};

export default Index;