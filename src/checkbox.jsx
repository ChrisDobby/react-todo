import React from "react";
import PropTypes from "prop-types";

function ItemSelect({ label, selected, select, unSelect, disabled }) {
    const changeSelected = () => {
        if (selected) {
            unSelect();
        } else {
            select();
        }
    };

    return (
        <label className="checkbox-field">
            <input type="checkbox" checked={selected} onChange={changeSelected} disabled={disabled} />
            <span className={disabled ? "checkmark disabled" : "checkmark"} />
            {label && <span className="label-text">{label}</span>}
        </label>
    );
}

ItemSelect.propTypes = {
    label: PropTypes.string,
    selected: PropTypes.bool,
    select: PropTypes.func.isRequired,
    unSelect: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

ItemSelect.defaultProps = {
    label: null,
    selected: false,
    disabled: false,
};

export default ItemSelect;
