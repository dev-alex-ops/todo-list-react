import React from 'react';
import { Icon } from '../Icon/Icon';

function DeleteIcon ({ onDelete }) {
    return (
        <Icon 
            iconType="delete"
            color="gray"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };