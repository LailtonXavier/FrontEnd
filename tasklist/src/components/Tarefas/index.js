import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import styles from '../../modules/Tarefas.module.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className={styles.tarefas}>
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>

            <FaEdit
              className={styles.edit}
              onClick={(e) => handleEdit(e, index)}
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className={styles.delete}
            />

          </span>
        </li>
      ))}

    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.string.isRequired,
};
