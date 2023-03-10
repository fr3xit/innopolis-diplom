const { alias } = require('react-app-rewire-alias');

const aliasMap = {
	'@data': 'src/data',
	'@js': 'src/js',
	'@layouts': 'src/components/layouts',
	'@page': 'src/components/page',
	'@global': 'src/components/global',
	'@modules': 'src/components/modules',
	'@blocks': 'src/components/blocks',
};

module.exports = function override(config, env) {
	alias(aliasMap)(config);

	return config;
};
