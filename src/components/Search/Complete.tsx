import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';
import { useDebouncedFunction } from './useDebouncedFunction';

function getRandomInt(max: number, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (
  query: string // сюда приходит искомое значение
) =>
  new Array(getRandomInt(5, 5)) // количество сайджестов
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
                href={`https://s.taobao.com/search?q=${query}`} // ссылка на страницу с определённой информацией
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

const Complete: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<unknown>['options']>([]);

  const debouncedSearchHandler = useDebouncedFunction(
    (value:string) => setOptions(value ? searchResult(value) : []),
    1000,
    true
  );
  // событие клик по сайджесту, здесь по идее должна происходить отрисовка
  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: '100%' }}
      options={options}
      onSelect={onSelect}
      onSearch={debouncedSearchHandler}>
      <Input.Search size='large' placeholder='Search Star Wars' />
    </AutoComplete>
  );
};

export default Complete;
