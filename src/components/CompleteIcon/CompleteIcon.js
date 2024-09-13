import React from 'react';
import { Icon } from '../Icon/Icon';

function CompleteIcon ({completed, onComplete}) {
    if (completed) {
        return (
            <Icon 
                iconType="completed"
                color={completed ? "green" : "gray"}
                onClick={onComplete}
            />
        ); 
    }
    return (
        <Icon 
            iconType="check"
            color={completed ? "green" : "gray"}
            onClick={onComplete}

        />
    );
}

export { CompleteIcon };