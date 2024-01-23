import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import { FilterContainer } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <FilterContainer>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        filter={filter}
      />
    </FilterContainer>
  );
};
