function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();