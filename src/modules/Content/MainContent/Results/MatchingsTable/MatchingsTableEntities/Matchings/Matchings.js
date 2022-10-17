import { List } from 'antd';
import MatchingArrow from 'components/MatchingArrow/MatchingArrow';
import React from 'react';
import MatchingsClasses from './Matchings.module.css';
import MatchingsProperty from './MatchingsProperty';

const Matchings = ({ entities }) => {
  return (
    <div className={MatchingsClasses.matchings}>
      <List
        itemLayout='horizontal'
        dataSource={entities}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<div className={MatchingsClasses.itemValue}>{item.db}</div>}
              description={
                <>
                  {Object.keys(item).map(property => {
                    if (property !== 'db') {
                      return <MatchingsProperty item={item} property={property} />;
                    }
                  })}
                </>
              }
            />
            <MatchingArrow gazName={item.db} id={item.id} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Matchings;
