import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
} from "./navigation.styles";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import signOutUser from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to={"/shop"}>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink
                            as="span"
                            className="nav-link"
                            onClick={signOutUser}
                        >
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to={"/auth"}>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
