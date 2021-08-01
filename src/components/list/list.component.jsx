import React, { useState } from 'react';
import { List, Spin, Modal } from 'antd';
import ListItem from '../listitem/listitem.component';

import config from './list.component.config';
import './list.style.less';

const ListData = ({ dataSource, loading }) => {
  const [selectedData, setSelectedData] = useState(undefined);

  return (
    <div className="list-data">
      <List
        bordered
        dataSource={dataSource}
        renderItem={(item) => (
          <ListItem
            item={item}
            onClickImage={(data) => {
              setSelectedData(data);
            }}
          />
        )}
      />
      {loading && (
        <div className="loading">
          <Spin />
        </div>
      )}
      <Modal
        title={`${selectedData?.Title} (${selectedData?.Year})`}
        visible={selectedData}
        footer={null}
        onCancel={() => {
          setSelectedData(undefined);
        }}
      >
        <img height={500} alt="poster" src={selectedData?.Poster} />
      </Modal>
    </div>
  );
};

ListData.displayName = config.displayName;
ListData.defaultProps = config.defaultProps;
ListData.propTypes = config.propTypes;

export default ListData;
