import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="task-input"
          placeholder="やることを記入"
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? '編集' : '追加'}
          </button>
          <button onClick={clearList} className="btn clear-btn">
            全削除
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
