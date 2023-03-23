const { alias } = require('react-app-rewire-alias');

const aliasMap = {
	'@data': 'src/data',
	'@store': 'src/store',
	'@tools': 'src/tools',
	'@hooks': 'src/hooks',
	'@layouts': 'src/components/layouts',
	'@page': 'src/components/page',
	'@global': 'src/components/global',
	'@modules': 'src/components/modules',
	'@groups': 'src/components/groups',
	'@blocks': 'src/components/blocks',
};

module.exports = function override(config, env) {
	alias(aliasMap)(config);

	return config;
};
