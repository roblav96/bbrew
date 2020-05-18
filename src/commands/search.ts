import * as homebrew from '../adapters/homebrew'
import * as http from '../adapters/http'
import * as Parser from '@oclif/parser'
import { Command, flags } from '@oclif/command'

export default class SearchCommand extends Command {
	static description = 'Search homebrew/core and homebrew/cask formulae'

	static examples = [
		'$ bbrew search wget',
		//
	]

	static flags = {
		help: flags.help({ char: 'h' }),
		desc: flags.boolean({ char: 'd', default: true }),
		casks: flags.boolean({ char: 'c', default: process.platform == 'darwin' }),
		formulae: flags.boolean({ char: 'f', default: true }),
	}

	static args = [
		{ name: 'query' },
		//
	] as Parser.args.IArg[]

	async run() {
		let { args, flags } = this.parse(SearchCommand)
		let results = await homebrew.search(args.query)
		this.log(`results ->`, results)
	}
}

setInterval(Function, 1 << 30)
