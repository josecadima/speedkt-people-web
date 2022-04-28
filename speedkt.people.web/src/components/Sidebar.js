import React from 'react';

import { Link, useLocation, useParams } from 'react-router-dom';

import { BiUser, BiUserVoice } from 'react-icons/bi';
import { RiShieldUserLine, RiContactsLine } from 'react-icons/ri';

import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';

const Sidebar = (props) => {
    const location = useLocation().pathname;

    //const personId = location.split("/").pop();
    const basicInfoLink = `/basicInfo/${props.personId}`;
    const contactInfoLink = `/contactInfo/${props.personId}`;
    const securityInfoLink = `/securityInfo/${props.personId}`;

    return (
        <div className="sidebar-container">
            <ProSidebar>
                <SidebarHeader>
                    Profile settings
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={location.startsWith("/basicInfo/")} icon={<BiUser />}>
                            Basic Info
                            <Link to={basicInfoLink} />
                        </MenuItem>
                        <MenuItem active={location.startsWith("/contactInfo/")} icon={<RiContactsLine />}>
                            Contact Info
                            <Link to={contactInfoLink} />
                        </MenuItem>
                        <MenuItem active={location.startsWith("/securityInfo/")} icon={<RiShieldUserLine />}>
                            Security Info
                            <Link to={securityInfoLink} />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;