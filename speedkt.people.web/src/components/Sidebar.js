import React from 'react'

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
                    <MenuItem active={true} icon={<BiUser />}> Basic Info </MenuItem>
                    <MenuItem active={true} icon={<RiContactsLine />}> Contact Info </MenuItem>
                    <MenuItem active={true} icon={<RiShieldUserLine />}> Security Info </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>;
        
    }
}