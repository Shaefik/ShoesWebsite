
import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [editTodo, setEditTodo] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [finishedTodo,setFinishedTodo] = useState([])

  const handleSubmit=(e) => {
    e.preventDefault(null)
    setTodo([...todo, task]);
    setTask('');
  };

  const handleEdit =(id) => {
    setEditTodo(id);
    setNewTask(todo[id]);
  };

  const handleSave= () => {
    const updatedTodo = [...todo];
    updatedTodo[editTodo] = newTask;
    setTodo(updatedTodo);
    setEditTodo(null);
  };

  const handleDelete = (id) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(id, 1);
    setTodo(updatedTodo);
  };
  const handleComplete = (id) => {
    const updatedFinishedTodo = [...finishedTodo, todo[id]];
    setFinishedTodo(updatedFinishedTodo);
    handleDelete(id); 
    console.log(updatedFinishedTodo)
  };

  return (
    <div className='container'>
      <h2 className='h2' >Tasks to do...</h2>
      <form className='form'  onSubmit={handleSubmit}>
        <input
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='add' type='submit'>Add</button>
      </form>
      <div>
        {todo.map((todos, id) => (
          <div key={id}>
            {editTodo === id ? (
              <>
                <input
                  type='text'
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className='saveBtn' onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
              <div className='editContain'>
              <h3 className='todos'>{todos}</h3>
              { task  && (
                <>
                 <button className='edit' onClick={() => handleEdit(id)}>Edit</button>
                <button className='del' onClick={() => handleDelete(id)}>Delete</button>
                <button className='complete' onClick={()=> handleComplete(id)} >Complete</button>
                </>
                
              )}
               

              </div>
                
              </>
            )}
          </div>
        ))}
        {finishedTodo.length > 0 ? <h3 className='completedTask' >Completed Tasks</h3> : <p></p>}
          {finishedTodo.map((completedTask, id) => (
          <div key={id} className='completed'>
            <h3 className='todos'>{completedTask}</h3>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Todo;



// import React, { useState } from 'react';
// import './Todo.css';

// function Todo() {
//   const [todo, setTodo] = useState([]);
//   const [task, setTask] = useState('');
//   const [finishedTodo, setFinishedTodo] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() !== '') {
//       setTodo([...todo, task]);
//       setTask('');
//     }
//   };

//  const handleFinished = (id) => {
//   // Check if the task is already marked as finished
//   if (!finishedTodo.includes(id)) {
//     // If not, update the finishedTodo state
//     const updatedFinishedTodo = [...finishedTodo, id];
//     setFinishedTodo(updatedFinishedTodo);

//     // Remove the task from the incomplete tasks
//     const updatedTodo = todo.filter((_, index) => index !== id);
//     setTodo(updatedTodo);
//   }
// };

//   const handleDelete = (id) => {
//     // Remove a task from either the incomplete or completed tasks
//     const updatedTodo = todo.filter((_, index) => index !== id);
//     const updatedFinishedTodo = finishedTodo.filter((completedId) => completedId !== id);

//     setTodo(updatedTodo);
//     setFinishedTodo(updatedFinishedTodo);
//   };

//   return (
//     <div className='container'>
//       <h2 className='h2'>Tasks to do...</h2>
//       <form className='form' onSubmit={handleSubmit}>
//         <input
//           placeholder="Add new task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//         />
//         <button className='add' type='submit'>
//           Add
//         </button>
//       </form>

//       <div>
//         <p>Incomplete Tasks</p>
//         {todo.map((todos, id) => (
//           <div key={id} className='task'>
//             <div className='editContain'>
//               <h3 className='todos'>{todos}</h3>
//               <button className='edit' onClick={() => handleFinished(id)}>
//                 Finished
//               </button>
//               <button className='del' onClick={() => handleDelete(id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//      <div>
//   <p>Completed Tasks</p>
//   {finishedTodo.map((id) => (
//     <div key={id} className='completed'>
//       <li className='todos'>{todo}</li>
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }

// export default Todo;
