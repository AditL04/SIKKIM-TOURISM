function MonasteryList({ monasteries, onSelect }) {
    return (
        <div className="monastery-list">
            {monasteries.map(monastery => (
                <button key={monastery.id} onClick={() => onSelect(monastery)}>
                    {monastery.name}
                </button>
            ))}
        </div>
    );
}
