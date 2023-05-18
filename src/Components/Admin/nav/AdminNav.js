import React from "react";
import { Link} from "react-router-dom";
import {ListItem} from '@mui/material';
import {logoutHandler} from '../../Utils/tools';

const AdminNav = () => {
    //const location = useLocation();
    const links = [
        {
            title:'Matches',
            linkTo:'/admin_matches'
        },
        {
            title:'Players',
            linkTo:'/admin_players'
        }
    ]

    const renderItems = () => {
        return links.map(link=>(
            <Link key={link.title} to={link.linkTo} title={link.title} >
                <ListItem button className="admin_nav_link">
                    {link.title}
                </ListItem>
            </Link>
        ));
    };
    //console.log(location);
return (
    <div>
        {renderItems()}
        <ListItem button className="admin_nav_link"
            onClick={()=> logoutHandler()}
        >
            Log Out
            </ListItem>
    </div>
)

}

export default AdminNav;