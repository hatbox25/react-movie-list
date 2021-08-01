import React from 'react';
import { List, Typography } from 'antd';

import config from './listitem.component.config';

const ListItem = ({ item, onClickImage }) => (
  <List.Item
    style={{
      borderBottomColor: '#d4d4d4',
      flexDirection: 'column',
    }}
  >
    <div
      onClick={() => {
        onClickImage(item);
      }}
    >
      <img height={200} alt="poster-list" src={item.Poster} />
    </div>

    <Typography.Text>{`${item.Title} - (${item.Year})`}</Typography.Text>
  </List.Item>
);

ListItem.displayName = config.displayName;
ListItem.defaultProps = config.defaultProps;
ListItem.propTypes = config.propTypes;

export default ListItem;
