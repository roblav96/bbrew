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
		casks: flags.boolean({ char: 'c', default: true }),
		formulae: flags.boolean({ char: 'f', default: true }),
	}

	static args = [

		{ name: 'query', description: true },
		//
	]

	async run() {
		let { args, flags, argv } = this.parse(SearchCommand)
		console.log('args ->', args)
		console.log('argv ->', argv)
		console.log('flags ->', flags)
		console.log('flags?.casks ->', flags?.casks)
		this.log(`hello ${args} from ${flags}`)
	}
}
