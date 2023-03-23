import React, { Component } from "react";
import styled from "styled-components";

const BoxHeader = styled.header`
  text-align: center;
`;

const Btns = styled.button`
  margin-left: 14px;
`;

const ListItem = styled.li`
  margin: 20px;
`;

export default class App extends Component {
  state = {
    tarefa: "",
    placeholder: "Adicione uma tarefa",
    lista: [],
  };

  input = (event) => {
    this.setState({ tarefa: event.target.value });
  };

  adicionar = () => {
    if (this.state.tarefa === "") {
      return;
    }
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Math.random(),
      }),
      tarefa: "",
    });
  };

  deletar = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  render() {
    return (
      <>
        <BoxHeader>
          <input
            value={this.state.tarefa}
            placeholder={this.state.placeholder}
            onChange={this.input}
          />
          <Btns onClick={this.adicionar}>Adicionar</Btns>
        </BoxHeader>
        <ol>
          {this.state.lista.map((item) => (
            <>
              <ListItem>
                <span>{item.tarefa}</span>
                <Btns
                  onClick={() => {
                    this.deletar(item.id);
                  }}
                >
                  Deletar
                </Btns>
              </ListItem>
            </>
          ))}
        </ol>
      </>
    );
  }
}
