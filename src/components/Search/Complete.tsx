import React from 'react';
import { Input, AutoComplete } from 'antd';
import useDebouncedFunction from './useDebouncedFunction';

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href='https://www.google.com/search?q=starwars+movies'
      target='_blank'
      rel='noopener noreferrer'>
      more
    </a>
  </span>
);

const renderItem = (title) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      {title}
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Films'),
    options: [
      renderItem('A New Hope'),
      renderItem('The Empire Strikes Back'),
      renderItem('Return of the Jedi'),
      renderItem('The Phantom Menace'),
      renderItem('Attack of the Clones'),
      renderItem('Revenge of the Sith'),
    ],
  },
];

const Complete = ({ handleInput, search }) => (
  <AutoComplete
    dropdownClassName='certain-category-search-dropdown'
    dropdownMatchSelectWidth={500}
    style={{
      width: '100%',
    }}
    options={options}>
    <Input.Search
      size='large'
      placeholder='Search Star Wars title'
      onChange={useDebouncedFunction(handleInput, 1000)}
      onSearch={search}
    />
  </AutoComplete>
);

export default Complete;
