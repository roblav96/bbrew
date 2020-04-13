export interface HomebrewCoreMetadata {
	aliases: string[]
	bottle: {
		stable: {
			cellar: string
			files: {
				catalina: {
					sha256: string
					url: string
				}
				el_capitan: {
					sha256: string
					url: string
				}
				high_sierra: {
					sha256: string
					url: string
				}
				mavericks: {
					sha256: string
					url: string
				}
				mojave: {
					sha256: string
					url: string
				}
				sierra: {
					sha256: string
					url: string
				}
				x86_64_linux: {
					sha256: string
					url: string
				}
				yosemite: {
					sha256: string
					url: string
				}
			}
			prefix: string
			rebuild: number
			root_url: string
		}
	}
	bottle_disabled: boolean
	build_dependencies: string[]
	caveats: string
	conflicts_with: string[]
	dependencies: string[]
	desc: string
	full_name: string
	homepage: string
	installed: {
		built_as_bottle: boolean
		installed_as_dependency: boolean
		installed_on_request: boolean
		poured_from_bottle: boolean
		runtime_dependencies: {
			full_name: string
			version: string
		}[]
		used_options: any[]
		version: string
	}[]
	keg_only: boolean
	linked_keg: string
	name: string
	oldname: string
	optional_dependencies: string[]
	options: {
		description: string
		option: string
	}[]
	outdated: boolean
	pinned: boolean
	recommended_dependencies: string[]
	requirements: {
		cask: string
		contexts: string[]
		download: string
		name: string
		version: string
	}[]
	revision: number
	urls: {
		stable: {
			revision: string
			tag: string
			url: string
		}
	}
	uses_from_macos: string[]
	version_scheme: number
	versioned_formulae: string[]
	versions: {
		bottle: boolean
		head: string
		stable: string
	}
}

export interface HomebrewCaskMetadata {
	appcast: string
	artifacts: string[][]
	auto_updates: boolean
	caveats: string
	conflicts_with: {
		cask: string[]
		formula: string[]
	}
	container: string
	depends_on: {
		cask: string[]
		formula: string[]
		macos: {
			'<=': string[]
			'==': string[]
			'>': string[]
			'>=': string[]
		}
		x11: boolean
	}
	homepage: string
	name: string[]
	sha256: string
	token: string
	url: string
	version: string
}
