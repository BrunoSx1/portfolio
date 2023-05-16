import React from 'react'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
	<Card>
		<Titulo>Projeto Lista de Tarefas</Titulo>
		<Paragrafo tipo="secundario">Lista de tarefas feitas com o VueJS</Paragrafo>
		<LinkBotao>Visualizar</LinkBotao>
	</Card>
)

export default Projeto
