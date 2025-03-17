import java.util.HashMap;
import java.util.Map;

public class ProductsController extends Controller {
    public void listProducts(){
        // get products from db
        Map<String, Object> context = new HashMap<>();
        render("Products.html", context, new MatchaViewEngine());
    }
}
