


// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { removeTodo, updateTodo, toggleCompleted } from '../features/todo/todoSlice';

// const Fntly = ({ todo }) => {
//   const [todoMsg, setTodoMsg] = useState(todo.text);
//   const [isTodoEditable, setIsTodoEditable] = useState(false);
//   const dispatch = useDispatch();

//   return (
//     <div className={`mt-4 flex justify-between items-center px-4 py-2 rounded-lg shadow-md ${todo.completed ? "bg-green-100" : "bg-white"} transition duration-300`}>
//       <input
//         type="checkbox"
//         className="cursor-pointer h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
//         checked={todo.completed}
//         onChange={() => dispatch(toggleCompleted({ id: todo.id }))}
//       />

// <input
//         type="text"
//         className={`ml-4 flex-grow border-none outline-none bg-transparent text-gray-900 transition duration-300 ${isTodoEditable ? "border-b-2 border-black px-2" : "border-b-0"} ${todo.completed ? "line-through text-gray-400" : ""}`}
//         value={todoMsg}
//         onChange={(e) => setTodoMsg(e.target.value)}
//         readOnly={!isTodoEditable}
//       /> 


//       <button
//         className={`ml-2 inline-flex w-8 h-8 rounded-full text-sm border justify-center items-center transition duration-300 ${isTodoEditable ? "bg-green-500 text-white border-green-500 hover:bg-green-600" : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"} focus:outline-none`}
//         onClick={() => {
//           if (isTodoEditable) {
//             dispatch(updateTodo({ id: todo.id, text: todoMsg }));
//             setIsTodoEditable(false);
//           } else {
//             setIsTodoEditable((prev) => !prev);
//           }
//         }}
//         disabled={todo.completed}
//       >
//         {isTodoEditable ? (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//             <path strokeLi  necap="round" strokeLinejoin="round" d="M16.5 3.5a4 4 0 00-5.648 0l-.414.414a4 4 0 00-.41 5.64l1.064 1.064a.25.25 0 01.06.168v2.21a1.25 1.25 0 001.94 1.032l1.445-1.445a4 4 0 000-5.648L16.5 3.5z" />
//           </svg>
//         )}
//       </button>

//       <button
//         onClick={() => dispatch(removeTodo(todo.id))}
//         className="ml-2 inline-flex w-8 h-8 rounded-full text-sm border border-red-500 justify-center items-center bg-red-500 hover:bg-red-600 text-white transition duration-300 focus:outline-none"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-5 h-5"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Fntly;



import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleCompleted } from '../features/todo/todoSlice';

const Fntly = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={`mt-4 flex justify-between items-center px-4 py-2 rounded-lg shadow-md ${todo.completed ? "bg-green-100" : "bg-white"} transition duration-300`}>
      <input
        type="checkbox"
        className="cursor-pointer h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
        checked={todo.completed}
        onChange={() => dispatch(toggleCompleted({ id: todo.id }))}
      />

   
<input
  type="text"
  className={`ml-4 flex-grow border-none outline-none bg-transparent text-gray-900 transition duration-300 ${isTodoEditable ? "border-b-2 border-black px-2 bg-gray-100" : "border-b-0"} ${todo.completed ? "line-through text-gray-400" : ""}`}
  value={todoMsg}
  onChange={(e) => setTodoMsg(e.target.value)}
  readOnly={!isTodoEditable}
/>

      <button
        className={`ml-2 inline-flex w-8 h-8 rounded-full text-sm border justify-center items-center transition duration-300 ${isTodoEditable ? "bg-green-500 text-white border-green-500 hover:bg-green-600" : "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"} focus:outline-none`}
        onClick={() => {
          if (isTodoEditable) {
            dispatch(updateTodo({ id: todo.id, text: todoMsg }));
            setIsTodoEditable(false);
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a4 4 0 00-5.648 0l-.414.414a4 4 0 00-.41 5.64l1.064 1.064a.25.25 0 01.06.168v2.21a1.25 1.25 0 001.94 1.032l1.445-1.445a4 4 0 000-5.648L16.5 3.5z" />
          </svg>
        )}
      </button>

      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="ml-2 inline-flex w-8 h-8 rounded-full text-sm border border-red-500 justify-center items-center bg-red-500 hover:bg-red-600 text-white transition duration-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Fntly;
