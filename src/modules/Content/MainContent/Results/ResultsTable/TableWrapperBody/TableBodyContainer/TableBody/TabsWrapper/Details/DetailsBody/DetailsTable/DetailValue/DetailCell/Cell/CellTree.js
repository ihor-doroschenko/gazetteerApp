import parse from 'html-react-parser';
import React from 'react';
import { parseLinkToHTML } from 'utils/Parsing/parseLinkToHTML';

const CellTree = ({ data }) => {
  return (
    <div>
      {data && typeof data === 'object' ? (
        Array.isArray(data) ? (
          data.map(item => (
            <>
              <CellTree data={item} />
            </>
          ))
        ) : (
          <div>
            {Object.keys(data).map(key => {
              return typeof data[key] === 'object' ? (
                <CellTree key={data[key]} data={data[key]} />
              ) : (
                <CellTree key={`${key} : ${data[key]}`} data={`${key} : ${data[key]}`} />
              );
            })}
          </div>
        )
      ) : data ? (
        typeof data === 'string' ? (
          parse(parseLinkToHTML(data))
        ) : (
          data
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default CellTree;
