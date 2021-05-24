import React, { useState, useEffect, useRef } from 'react';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';

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

const Complete: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);

  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: '100%' }}
      options={options}
      onSelect={onSelect}
      onSearch={useDebouncedFunction(handleSearch, 1000)}>
      <Input.Search size='large' placeholder='Search Star Wars' />
    </AutoComplete>
  );
};

export default Complete;
