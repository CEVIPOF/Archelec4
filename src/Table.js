import React from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

const Table = (props) => {
  const { data } = props;
    return (
      <table>
          <TableHeader />
          <TableBody data={data} />
      </table>
    );
}

export default Table;
