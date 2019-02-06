/**
 * Paths
 *
 * Project related paths.
 */

const path = require( 'path' );
const fs = require( 'fs' );

const pluginDir = fs.realpathSync( process.cwd() );
const resolvePlugin = relativePath => path.resolve( pluginDir, relativePath );

module.exports = {
	dotenv: resolvePlugin( '.env' ),
	pluginSrc: resolvePlugin( 'src' ),
	entryFile: resolvePlugin( 'src/gutenberg-jalali-calendar.js' ),
	yarnLockFile: resolvePlugin( 'yarn.lock' ),
	dist: resolvePlugin( '.' ),
	imrcAssetsNodeModule: resolvePlugin('node_modules/imrc-datetime-picker/assets/')
};
