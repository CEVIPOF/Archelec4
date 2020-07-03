import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Identifiant</th>
        {/*
        <th>Élection</th>
        <th>Année</th>
        <th>Mois</th>
        <th>Département</th>
        <th>Circonscription</th>
        <th>Tour</th>
        <th>Type de document</th>
        <th>Rand du candidat</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Sexe</th>
        <th>Âge</th>
        <th>Profession</th>
        <th>Mandat public en cours</th>
        <th>Madat public passé</th>
        <th>Association(s)</th>
        <th>Autre statut(s)</th>
        <th>Décorations</th>
        <th>Partis en soutien</th>
        <th>Liste</th>
*/}
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.identifiant}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { data } = props;
  return (
    <table>
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
