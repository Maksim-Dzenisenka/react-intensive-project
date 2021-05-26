import React, { useState, useEffect, useRef } from 'react';
import { Input, AutoComplete } from 'antd';

function getRandomInt(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query: string) =>
  new Array(getRandomInt(5, 5)) //количество сайджестов
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`} //ссылка на страницу с определённой информацией
                target='_blank'
                rel='noopener noreferrer'>
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

function useDebouncedFunction(func: any, delay: number, cleanUp = false) {
  const timeoutRef: any = useRef();

  function clearTimer() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }
  }

  useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);

  return (...args: any) => {
    clearTimer();
    timeoutRef.current = setTimeout(() => func(...args), delay);
  };
}

export default function Complete() {
  const renderTitle = (title) => (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href='https://www.google.com/search?q=antd'
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
        renderItem('evenge of the Sith'),
      ],
    },
  ];

  return;
  /* <AutoComplete
      dropdownClassName='certain-category-search-dropdown'
      dropdownMatchSelectWidth={500}
      style={{
        width: 850,
      }}
      options={options}
      <Input.Search size='large' placeholder='input here' />
    </AutoComplete> */
  /* <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: '100%' }}
      options={options}
      onSearch={useDebouncedFunction(handleSearch, 1000)}>
      <Input.Search size='large' placeholder='Search Star Wars' />
    </AutoComplete> */
}
