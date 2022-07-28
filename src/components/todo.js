import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import AddTodo from "./addTodo";
import TodoList from "./todosList";
const Todo = () => {
    const [listOfTastks, setListOfTasks] = useState([]);
    const [initialValue, setInitialValue] = useState({});
    const [editable, setEditable] = useState(false);
    const [selected, setSelected] = useState(false);
    const changeSelectedTask = (selectedTask) => {
        setSelected(selectedTask);
    }
    const addTask = (task) => {
        setListOfTasks((previusTask) => {
            return [
                {
                    taskValue: task,
                    id: Math.random().toString(),
                    isSelected: false,
                    editable: false,
                    date: new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

                },
                ...previusTask
            ]


        })
    }
    const deleteTask = (id) => {
        const tasks = listOfTastks.filter((t) => t.id !== id);
        setListOfTasks(tasks);
    }

    const setCompletedTask = (id, checkboxStatus) => {
        let dataArr = [];
        for (let i = 0; i < listOfTastks.length; i++) {
            if (id == listOfTastks[i].id) {
                dataArr.push({ ...listOfTastks[i], isSelected: checkboxStatus });
            } else {
                dataArr.push(listOfTastks[i]);
            }
        }
        dataArr.sort((a, b) => {
            return Number(a.isSelected) - Number(b.isSelected);

        });
        setListOfTasks(dataArr);
    }




    const editeTask = (obji, task) => {

        let dataArr = [];
        for (let i = 0; i < listOfTastks.length; i++) {

            if (obji.id === listOfTastks[i].id) {
                dataArr.push({ ...listOfTastks[i], taskValue: task, date: new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) });
            } else {
                dataArr.push(listOfTastks[i]);
            }
        }
        setListOfTasks(dataArr);
        setEditable(false);
    }
    return (
        <>
            <AddTodo addTask={addTask} inV={initialValue} edit={editeTask} initialEditableValue={editable} />
            <FlatList data={listOfTastks} renderItem={({ item }) => <TodoList task={item} setCompletedTask={setCompletedTask} changeSelectedTask={changeSelectedTask} setSelected={setSelected} onDeleteTask={deleteTask} setInv={setInitialValue} setEditable={setEditable} />} />
        </>
    )
}

export default Todo;