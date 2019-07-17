import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";
import isOverdue from "./isOverdue";

function Item({ item, completeItem }) {
    const itemClass = `list-group-item list-group-item-${isOverdue(item) ? "danger" : "info"}`;
    return (
        <li className={itemClass}>
            <div className="item">
                <span className={`item-title${item.complete ? " complete-item" : ""}`}>
                    <i className={isOverdue(item) ? "fas fa-exclamation-circle" : ""} />
                    {`${item.name} - ${dateformat(new Date(item.timestampDue), "dd-mmm-yyyy")}`}
                </span>
                {!item.complete && (
                    <button type="button" className="btn btn-link" onClick={completeItem}>
                        Complete item
                    </button>
                )}
            </div>
        </li>
    );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    completeItem: PropTypes.func.isRequired,
};

export default Item;
