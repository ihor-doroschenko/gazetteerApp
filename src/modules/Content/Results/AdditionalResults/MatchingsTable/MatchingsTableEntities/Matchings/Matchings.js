import { List } from 'antd';
import MatchingsTools from 'components/MatchingsTools/MatchingsTools';
import React from 'react';
import { getKey } from 'utils/TextHandlers/getKey';
import MatchingsClasses from './Matchings.module.css';
import MatchingsProperty from './MatchingsProperty';

// Component to contain matchings. List UI-element of antdesign is used for this aim. The matching is shown with its attributes, gazetteer name (separately), and tools to work with the matching

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
                  {Object.keys(item).map(property => (
                    <MatchingsProperty
                      key={getKey(property, 'matchings')}
                      item={item}
                      property={property}
                    />
                  ))}
                </>
              }
            />
            <MatchingsTools gazName={item.db} id={item.id} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Matchings;
