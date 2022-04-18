import React from 'react';

import { Link } from 'react-router-dom';

import { BiUser, BiUserVoice } from 'react-icons/bi';
import { RiShieldUserLine, RiContactsLine } from 'react-icons/ri';

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export class Sidebar extends React.Component {
    render() {
        return <ProSidebar>
            <SidebarHeader>
                Profile settings
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem active={window.location.pathname === "/basicInfo"} icon={<BiUser />}>
                        Basic Info
                        <Link to="/basicInfo" />
                    </MenuItem>
                    <MenuItem active={window.location.pathname === "/contactInfo"} icon={<RiContactsLine />}>
                        Contact Info
                        <Link to="/contactInfo" />
                    </MenuItem>
                    <MenuItem active={window.location.pathname === "/securityInfo"} icon={<RiShieldUserLine />}>
                        Security Info
                        <Link to="/securityInfo" />
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>;
        
    }
}