function ProductGallery({ currentProductId, category }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
