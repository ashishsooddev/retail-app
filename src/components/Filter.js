function Filter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter-group" id="filter-group">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-chip ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category === "all"
            ? "All Products"
            : category
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
        </button>
      ))}
    </div>
  );
}

export default Filter;