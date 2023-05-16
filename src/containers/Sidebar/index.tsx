import React from 'react'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
	<aside>
		<SidebarContainer>
			<Avatar />
			<Titulo fontSize={20}>Bruno Silva</Titulo>
			<Paragrafo tipo="secundario" fontSize={16}>
				BrunoSx1
			</Paragrafo>
			<Descricao tipo="principal" fontSize={12}>
				Engenheiro Front-End
			</Descricao>
			<BotaoTema>Trocar Tema</BotaoTema>
		</SidebarContainer>
	</aside>
)

export default Sidebar
