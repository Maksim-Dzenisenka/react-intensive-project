import React from 'react';
import { Input, AutoComplete } from 'antd';
import useDebouncedFunction from './useDebouncedFunction';

const options = [
  { value: 'A New Hope' },
  { value: 'The Empire Strikes Back' },
  { value: 'Return of the Jedi' },
  { value: 'The Phantom Menace' },
  { value: 'Attack of the Clones' },
  { value: 'Revenge of the Sith' },
];

const Complete = ({ handleInput, search }) => (
  <AutoComplete
    style={{ width: '100%' }}
    options={options}
    placeholder='try to type "hope"'
    filterOption={(handleInput, option) =>
      option!.value.toUpperCase().indexOf(handleInput.toUpperCase()) !== -1
    }>
    <Input.Search
      size='large'
      onSelect={useDebouncedFunction(handleInput, 10)}
      onSearch={search}
    />
  </AutoComplete>
);

export default Complete;
