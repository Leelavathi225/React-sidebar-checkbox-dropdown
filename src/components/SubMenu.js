import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
 
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleCheckboxChange=(itemKey) =>{
    // first, make a copy of the original set rather than mutating the original
    const newSelectedItems = new Set(selectedItems)
    if (!newSelectedItems.has(itemKey)) {
        newSelectedItems.add(itemKey)
    } else {
        newSelectedItems.delete(itemKey)
    }
    setSelectedItems(newSelectedItems)
}

  
  const showSubnav = () => setSubnav(!subnav);
  
  return (
    <>
      <SidebarLink to={item.path} onClick={item.nodes && showSubnav}>
        <div>
        <input type="checkbox"  checked={selectedItems.has(item.key)}
        onChange={() => handleCheckboxChange(item.key)} ></input>
          <SidebarLabel>{item.label}</SidebarLabel>
          
        </div>
        <div>
          {item.nodes && subnav
            ? item.iconOpened
            : item.nodes
            ? item.iconClosed
            : null}
        </div>
        
      </SidebarLink>
      {subnav &&
        item.nodes.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              
       
          <SidebarLink to={item.path} onClick={item.nodes && showSubnav}>
      
      <input type="checkbox"  checked={selectedItems.has(item.key)}
        onChange={() => handleCheckboxChange(item.key)}/>
          <SidebarLabel>{item.label}</SidebarLabel>
          
        
          {item.nodes && subnav
            ? item.iconOpened
            : item.nodes
            ? item.iconClosed
            : null}
        
        
      </SidebarLink>
     

        <div class="styling">
             {subnav &&
        item.nodes.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLink to={item.path} onClick={item.nodes && showSubnav}>
              <input type="checkbox"  checked={selectedItems.has(item.key)}
        onChange={() => handleCheckboxChange(item.key)}/>
             
             <div > <SidebarLabel>{item.label}</SidebarLabel></div>
             
         
             </SidebarLink>
            </DropdownLink>
          );
        })}
      </div>
      
            </DropdownLink>
          );
        })}
        
    </>
  );
};

export default SubMenu;
