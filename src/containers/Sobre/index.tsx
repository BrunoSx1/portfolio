import React from 'react'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
	<section>
		<Titulo fontSize={16}>Sobre mim</Titulo>
		<Paragrafo tipo="secundario">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod optio,
			quibusdam suscipit voluptate earum dolore officiis omnis qui ipsam enim
			repellat, autem laudantium soluta unde voluptatum hic! Doloremque, ut
			dolorum!
		</Paragrafo>
		<GithubSecao>
			<img src="https://github-readme-stats.vercel.app/api?username=BrunoSx1&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
			<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrunoSx1&layout=compact&langs_count=7&theme=dracula" />
		</GithubSecao>
	</section>
)

export default Sobre
