import React from 'react';

const CalendarioTable: React.FC = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>segunda</th>
          <th>terça</th>
          <th>quarta</th>
          <th>quinta</th>
          <th>sexta</th>
          <th>sábado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Picadinho de Carne com Legumes</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
        </tr>
        <tr>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
          <td>Virada Paulista - Tutu de feijão, couve e linguiça</td>
        </tr>

      </tbody>
    </table>
  );
};

export default CalendarioTable;