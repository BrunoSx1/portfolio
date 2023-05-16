import React from 'react'
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
	trocaTema: () => void
}

const Sidebar = (props: Props) => (
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
			<BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
		</SidebarContainer>
	</aside>
)

export default Sidebar
