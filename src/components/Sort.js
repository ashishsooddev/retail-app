function Sort({ sortBy, onSortChange }) {
  return (
    <div className="sort-group" id="sort-group">
      <span className="sort-label">SORT BY:</span>
      
      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
      </select>
    </div>
  );
}

export default Sort;