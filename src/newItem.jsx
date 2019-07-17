import React from "react";
import PropTypes from "prop-types";
import dateformat from "dateformat";

function NewItem({ add, cancel }) {
    const [name, setName] = React.useState("");
    const [date, setDate] = React.useState(dateformat(new Date(), "yyyy-mm-dd"));

    const addItem = () => {
        const dueDate = new Date(date);
        add({ name, timestampDue: dueDate.getTime(), complete: false, id: 0 });
    };
    return (
        <div className="add-item-form">
            <div className="form-group">
                <label htmlFor="addItemInput">Item description</label>
                <input
                    type="text"
                    placeholder="Enter description..."
                    className="form-control"
                    id="addItemInput"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="addItemDueInput">Due date</label>
                <input
                    type="date"
                    className="form-control"
                    id="addItemDueInput"
                    onChange={e => setDate(e.target.value)}
                    value={date}
                />
            </div>
            <button className="btn btn-success" disabled={name === ""} onClick={addItem}>
                Add item
            </button>
            <button className="btn btn-secondary" style={{ marginLeft: "20px" }} onClick={cancel}>
                Cancel
            </button>
        </div>
    );
}

NewItem.propTypes = {
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
};

export default NewItem;
