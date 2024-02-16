import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHECKBOX } from '../store';
import { produce } from 'immer';

function CategoryLists() {
  const checkboxes = useSelector((state) => state.sideBar.checkbox);
  const dispatch = useDispatch();


  const handleCheckbox = (index) => {
    const draft = produce(checkboxes, (draft) => {
      draft[index].checked = !draft[index].checked;
    });
    dispatch({ type: SET_CHECKBOX, payload: draft });
  };

  return (
    <div className='category-lists'>
      <div className='category-title'>CATEGORIES</div>
      <ul>
        {checkboxes.map((category, index) => {
          return (
            <li key={category.cat_title}>
              <div className='list-item'>
                <input
                  type='checkbox'
                  id={`checkbox-${index}`}
                  onChange={() => handleCheckbox(index)}
                  checked={checkboxes[index].checked}
                />
                <label htmlFor={`checkbox-${index}`}>
                  {category.cat_title}
                </label>
              </div>
              <div className='item-amount'>{category.size}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryLists;
