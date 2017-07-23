const path = require('path');
const fsExtra = require('fs-extra');

exports.onCreateNode = ({ node }, pluginOptions) => {
	const { source, destination } = pluginOptions;
	if (node.internal.type === 'File') {
		if (node.dir.includes(source)) {
			const relativeToDest = node.dir.replace(source, '');
			const newPath = path.join(
				process.cwd(),
				'public',
				destination,
				relativeToDest,
				node.base
			);

			fsExtra.copy(node.absolutePath, newPath, err => {
				if (err) {
					console.error('Error copying file', err);
				}
			});
		}
	}
};
