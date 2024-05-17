import React from 'react';
import {
    NavLink
} from "react-router-dom";
import { ROUTE_NAV } from "../../untils/route"
import '../styles/scss/Nav.scss';

// KHAI BÁO ROUTE CHO NAV
const ROUTE = [
    { id: 1, label: 'Home', route: ROUTE_NAV?.HOME },
    { id: 2, label: 'Todos', route: ROUTE_NAV?.TODO },
    { id: 3, label: 'About', route: ROUTE_NAV?.ABOUT },
    { id: 4, label: 'Users', route: ROUTE_NAV?.USER },
]

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {
                    ROUTE?.map((item) => <NavLink key={item?.id} to={item?.route} activeClassName="active" exact={item?.id === 1}>
                        {item?.label}
                    </NavLink>)
                }
            </div>
        )
    }
}
export default Nav;
