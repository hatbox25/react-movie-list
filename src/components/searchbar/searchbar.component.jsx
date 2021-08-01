import React, { useState, useEffect } from 'react';
import { AutoComplete, Input } from 'antd';

import config from './searchbar.component.config';
import './searchbar.style.less';

const Searchbar = ({ suggestion, getMovies, getSuggestion, onChange }) => {
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    onChange(keyword);
  }, [keyword]);

  return (
    <div className="searchbar">
      <AutoComplete
        value={keyword}
        options={suggestion.map((item) => ({
          value: item.Title,
        }))}
        onSelect={(word) => {
          setKeyword(word);

          if (word.length > 2) getMovies(word, 1);
        }}
        onSearch={(word) => {
          if (word.length > 2) getSuggestion(word, 1);
        }}
        onChange={(word) => {
          setKeyword(word);
        }}
      >
        <Input.Search
          size="large"
          placeholder="Search movie... ex: Batman"
          enterButton
        />
      </AutoComplete>
    </div>
  );
};

Searchbar.displayName = config.displayName;
Searchbar.defaultProps = config.defaultProps;
Searchbar.propTypes = config.propTypes;

export default Searchbar;
