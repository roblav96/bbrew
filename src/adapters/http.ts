import * as popsicle from 'popsicle/dist/node'

export async function fetch<T = any>(
	input: Parameters<typeof popsicle.fetch>[0],
	init?: Parameters<typeof popsicle.fetch>[1],
) {
	return (await (await popsicle.fetch(input, init)).json()) as T
}
