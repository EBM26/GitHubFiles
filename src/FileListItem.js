import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';
import FileName from './FileName';
import CommitMessage from './CommitMessage';


const FileListItem = ( {file} ) => (
	<tr className="file-list-item" key={file.id}>
		<td><FileName file={file} /></td>
		<td><CommitMessage commit={file.latestCommit} /></td>
		<td className="age"><Time time={file.updated_at} /></td>
	</tr>
	);

FileListItem.propTypes = {
	file: PropTypes.object.isRequired
}

export default FileListItem;