import React from 'react';
import FileIcon from './FileIcon';
import PropTypes from 'prop-types';

function FileName ( {file} ) {
	return (
		<React.Fragment>
		 <FileIcon file={file} />
		 <span className="file-name">{file.name}</span>
		</React.Fragment>
		)
}

FileName.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileName;