import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImRadioUnchecked } from "react-icons/im";
import { FaTrash } from "react-icons/fa6";
import './Icon.css';

const iconTypes = {
    "check": <ImRadioUnchecked />,
    "delete": <FaTrash />,
    "completed": <FaRegCircleCheck />,
}

function Icon ({ iconType, completed, onClick }) {
    return (
        <span
            className={`icon icon-${iconType} ${completed && "icon-check-active"}`}
            onClick={onClick}
        >
            {iconTypes[iconType]}
        </span>
    );
}

export { Icon };