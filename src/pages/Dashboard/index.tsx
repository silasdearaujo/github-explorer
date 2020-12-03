import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    console.log('newRepo');
    const response = await api.get(`repos/${newRepo}`);

    console.log(response);
    
  }
  
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios do Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input 
        value = {newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img 
            src="https://avatars2.githubusercontent.com/u/51761976?s=460&u=59b578f2efc9e56884b8e793b432524dd8655693&v=4" 
            alt="Silas de Araujo"
          />
          <div>
            <strong>silasdearaujo</strong>
            <p>Github explorer</p>
        </div>
        <FiChevronRight size={30}/>
        </a>            
      </Repositories>
    </>
  );
};

export default Dashboard;