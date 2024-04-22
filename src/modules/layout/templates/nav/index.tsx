import NavBar from '../../components/Header/NavBar';
import SearchBar from '../../components/Header/SearchBar';
import MobileMenu from '../../components/Header/MobileMenu';
import { ProductCategory } from '@medusajs/medusa';
import { MenuItem } from 'types/global';
import { listCategories } from '@lib/data';
import { cookies } from "next/headers"

const generateMenu = (items: ProductCategory[], parentId: string | null = null) => {
    const menu: MenuItem[] = [];
    for (const item of items) {
      if (item.parent_category_id === parentId) {
        const submenu = generateMenu(items, item.id);
        if (submenu.length > 0) {
          menu.push({ title: item.name, submenu });
        } else {
          menu.push({ title: item.name });
        }
      }
    }
    return menu;
}

const Header = async () => {
    // const [togglemobile, setTogglemobile] = useState(false);

    // const toggleMobileMenu = () => {
    //     setTogglemobile(togglemobile ? false : true);
    // }
    const categories = await listCategories();
    const menuData = generateMenu(categories);    
    const jwt = cookies().get("_medusa_jwt")?.value;

    return (
        <header className="relative">
            <MobileMenu menuData={menuData} />
            <SearchBar jwt={jwt} />
            <NavBar menuData={menuData} />
        </header>

    );
};

export default Header;
