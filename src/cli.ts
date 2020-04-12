#!/usr/bin/env node

import * as bbrew from '.'
import * as mri from 'mri'

process.nextTick(async () => {
	let argvs = mri(process.argv.slice(2))
	let inputs = argvs._ as string[]
})
