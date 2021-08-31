import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';

import styles from '../modules/Main.module.css';

export default class Main extends Component {
  state = {
    novaTarefa: ' ',
    tarefas: [],
    index: -1,
  };

  // pegando as tarefas salvas no localStorage
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return; // se n existe tarefas faz nd

    this.setState({ tarefas });
  }

  // salvando, compntDidUpdt ele pegar tds as cartrs
  // prevState = um estado anterior de outra string
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return; // n faz nd se não exixtir

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Adicionando tarefas
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();// trim elimita os espaços

    if (tarefas.indexOf(novaTarefa) !== -1) return; // para se n estivar alguma coisa dentro

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '', // limpando o input
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  // pegar qnd clicar
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  // Editar e delete (ela esta pegando o 'e' e o 'index1, pq seria para editar e delete no msm mtd)
  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  // do indice 2 remova um elemento
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novaTarefas],
      novaTarefa: '',
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className={styles.main}>
        <h1>Nova tarefa</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
