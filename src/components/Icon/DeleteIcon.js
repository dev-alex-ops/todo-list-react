import React from 'react';
import { Icon } from '.';

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