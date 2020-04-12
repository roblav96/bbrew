#!/usr/bin/env node

import * as brews from '.'
import * as fs from 'fs-extra'
import * as mri from 'mri'
import * as path from 'path'

process.nextTick(async () => {
	let argvs = mri(process.argv.slice(2))

	let inputs = argvs._ as string[]
})
