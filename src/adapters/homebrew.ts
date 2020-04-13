export * from '../types/homebrew'
import * as homebrew from '../types/homebrew'
import * as http from '../adapters/http'

export async function search(query: string) {
	let [cores, casks] = await Promise.all([
		http.fetch<homebrew.HomebrewCoreMetadata[]>(
			`https://formulae.brew.sh/api/formula${
				process.platform != 'darwin' ? '-linux' : ''
			}.json`,
		),
		process.platform == 'darwin'
			? http.fetch<homebrew.HomebrewCaskMetadata[]>('https://formulae.brew.sh/api/cask.json')
			: [],
	])
	query = query.toLowerCase()
	cores = cores.filter((v) => {
		return `${v.name} ${v.aliases.join(' ')} ${v.desc}`.toLowerCase().includes(query)
	})
	console.log(`cores ->`, cores)
	casks = casks.filter((v) => {
		return `${v.token} ${v.name.join(' ')}`.toLowerCase().includes(query)
	})
	console.log(`casks ->`, casks)
}

export interface HomebrewSearchResult {}
