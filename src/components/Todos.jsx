

import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import Fntly from './Fntly';
import { saveState } from '../localStorage';

export function Todos() {

  const todos = useSelector(state => state.todos);
  useEffect(() => {
    saveState(todos);
  }, [todos])
   
  return (
    <>
  <ul className="list-none">
      {todos.map((todo) => (
          <li>
                <Fntly todo={todo}/>
           </li>
        ))}
      </ul>
    </>
  );
}
export default Todos



