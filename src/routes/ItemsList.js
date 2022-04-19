import { useState } from "react";

export default function ItemsList({ items, setItems }) {
    const [name, setName] = useState('');
    return (
        <>
            <h1>List of items</h1>
            <form>
                <input
                    onChange={newText => { setName(newText.target.value) }}
                    aria-label='Enter the name of a new item'
                    placeholder='Enter the name of a new item'
                    className="common-block" />
            </form>
            <button
                onClick={() => {
                    const key = items[items.length - 1].key + 1;
                    setItems([...items,
                    {
                        key: key,
                        name: name
                    }]);
                    setName('');
                    alert(`New item with the key ${key} and the name ${name} added`);
                }}
                title="Adds a new items"
                disabled={name === ''}
                aria-label='Add a new item to the list'
                className="common-block">Add</button>
            <div>{[items.map(item => {
                return (
                    <div
                        key={item.key}
                        className="item">
                        <div
                            onClick={() => {
                                alert(item.name);
                            }}
                            aria-label='Show the name of the item'>{item.name}</div>
                        <button
                            onClick={() => {
                                const isUserWantsToDelete = window
                                    .confirm('Do you really want to delete the item?');
                                if (!isUserWantsToDelete) {
                                    return;
                                }
                                items.splice(items.indexOf(item), 1);
                                setItems([...items]);
                                alert('Item has been deleted');
                            }}
                            aria-label='Delete the selected item'
                            className='item item__button'>
                            Delete
                        </button>
                    </div>);
            })]}</div>
        </>
    );
}