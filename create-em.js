//import fs from 'fs';
const fs = require('fs');
//const { forEach } = require('lodash');
const path = require('path');
//const { fileURLToPath } = require('url');

class MyFileMaker {
	constructor (outDir) {
		this.outDir = outDir||'.';
		this.baseDir = path.resolve(this.outDir,'node_modules/webpack-cli/bin');

		this.dirLocal=path.resolve('.');
		this.dirUtil=path.resolve(path.join(this.baseDir, 'utils'));
		this.dirCfg=path.resolve(path.join(this.baseDir, 'config'));

		console.debug(`baseDir=${this.baseDir}`);
		var convertArgVData='/**\r\n'+
		'* describe this function.\r\n'+
		'* @param {Object} a figure this out\r\n'+
		'* @param {Object} b figure this out-2.\r\n'+
		'* @param {Object} c figure this out-3\r\n'+
			'*/\r\n'+
			'// eslint-disable-next-line no-unused-vars\r\n'+
			'module.exports = function (a,b,c) {\r\n'+
			'\tconsole.log(\'here\');\r\n'+
			'};';

		var convertYargsData=
			'/**\r\n'+
			'* This method, blah blah blah.\r\n'+
			'* @param {Object} need to backtrack this, and find out what it is.\r\n'+
			'*/\r\n'+
			'// eslint-disable-next-line no-unused-vars\r\n'+
			'module.exports = function (a) {\r\n'+
			'\tconsole.log(\'here\');\r\n'+
			'};';

		this.desiredFiles=[
			{
				name:'convert-argv.js',
				dir:this.dirUtil,
				genVar:convertArgVData
			},
			{
				name:'config-yargs.js',
				dir:this.dirCfg,
				genVar:convertYargsData
			},
			{
				name:'tester.js',
				dir:this.dirLocal,
				genVar:convertYargsData
			}
		];
		//				this.createFile(path.resolve(path.join(dirs[ 0 ], 'convert-argv.js')),this.convertArgVData		);
		//this.createFile(path.resolve(path.join(dirs[ 1 ], 'config-yargs.js')),this.convertYargsData);
		//this.createFile(path.resolve(path.join(this.outDir, 'tester.js')),this.convertArgVData);

	}
	createAllFiles() {

		//var dirs = [
		//	path.join(this.baseDir, 'utils'),
		//	path.join(this.baseDir, 'config')
		//];

		//this.createDirectories(dirs);
		this.createFile(path.resolve(path.join(dirs[ 0 ], 'convert-argv.js')),this.convertArgVData		);
		this.createFile(path.resolve(path.join(dirs[ 1 ], 'config-yargs.js')),this.convertYargsData);
		this.createFile(path.resolve(path.join(this.outDir, 'tester.js')),this.convertArgVData);
	}
	/**
	 * Create required directories.
	 * @param {Array} dirs array of output-directories
	 */
	//createDirectories(dirs) {
	//	var errorFound=false;

	//	dirs.forEach(function(aDir){
	//		if (!fs.existsSync(aDir))
	//			try {
	//				fs.mkdirSync(aDir,true);
	//				console.debug(`created ${aDir}`);
	//			}catch(err){
	//				console.err(err);
	//				errorFound=true;
	//			}
	//	});
	//	return errorFound;
	//}
	/**
	 * Generate a file with with give content.
	 * @param {string} outPath final directory for 'fname'.
	 * @param {string} fname filename to write
	 * @param {string} szFileContent file-content to write.
	 */
	// eslint-disable-next-line no-unused-vars
	createFile(outFile,szFileContent){
		var ret=false,dir;

		try {
			if (!fs.existsSync(dir=path.dirname(outFile)))
				fs.mkdirSync(dir,true);
			fs.writeFileSync(outFile,szFileContent);
			console.debug(`created: ${outFile}`);
			ret=true;
		}catch(err){
			console.error(`creation of ${outFile} failed!\r\n${err}`);
		}

		return ret;
	}

	/**
	 * test
	 */
	blah(){
		console.log('here');
	}
}

function main(){
	console.debug('starting');
	new MyFileMaker().createAllFiles();
	console.debug('ends');
	process.exit(0);
}

main();