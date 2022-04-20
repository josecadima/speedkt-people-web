import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { BiUser, BiUserVoice } from 'react-icons/bi';
import { RiShieldUserLine, RiContactsLine } from 'react-icons/ri';

import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation().pathname;

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
                            <Link to="/basicInfo" />
                        </MenuItem>
                        <MenuItem active={location.startsWith("/contactInfo/")} icon={<RiContactsLine />}>
                            Contact Info
                            <Link to="/contactInfo" />
                        </MenuItem>
                        <MenuItem active={location === "/securityInfo"} icon={<RiShieldUserLine />}>
                            Security Info
                            <Link to="/securityInfo" />
                        </MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;