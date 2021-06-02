import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';
import { useDebouncedFunction } from './useDebouncedFunction';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addSearchUrl, movieId } from '../Episodes/episodesSlice';

const Complete: React.FC = () => {
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);
  const dispatch = useAppDispatch();

  const searchResult = (resultSearch: any) => {
    return new Array(resultSearch.length)
      .join('.')
      .split('.')
      .map((_, idx) => {
        const category = `${resultSearch[idx].title}`;

        return {
          value: category,
          label: (
            <Link to={`/films?search=${category.replaceAll(' ', '-')}`}>
              <div>{category}</div>
            </Link>
          ),
        };
      });
  };

  const debouncedSearchHandler = useDebouncedFunction(
    (value) => {
      if (value) {
        axios(`https://swapi.dev/api/films/?search=${value}`)
          .then(({ data }) => {
            let results = data.results;
            setOptions(results ? searchResult(results) : []);
          })
          .catch(() => {
            setOptions([]);
          });
      } else {
        setOptions([]);
      }
    },
    1000,
    true
  );

  const onSelect = (value: string) => {
    axios(`https://swapi.dev/api/films/?search=${value}`).then(({ data }) => {
      const [result] = data.results;
      dispatch(movieId(result.episode_id));
    });

    const searchVal = value.replaceAll(' ', '-');
    dispatch(addSearchUrl(`/films?search=${searchVal}`));
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
