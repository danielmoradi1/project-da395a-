import { Fragment, useState } from "react";

function Selector({ data, selected, setSelected }) {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredItems =
    query === ""
        ? data
        : data.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );

    const handleSelect = (item) => {
    setSelected(item);
    setQuery(item.name);
    setIsOpen(false);
};

    return (
    <div className="relative">
        <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        placeholder="Select an option"
        className="w-72 border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        />
        {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
            {filteredItems.map((item) => (
                <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="cursor-pointer select-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                {item.name}
                </div>
            ))}
            </div>
        </div>
        )}
    </div>
    );
}

export default Selector;
