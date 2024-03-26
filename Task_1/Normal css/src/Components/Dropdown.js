import { useState } from 'react';
const menuData = [
    {
      label: "Application Launcher",
      submenu: [
        {
          label: "Application 1",
          submenu: [
            {
              label: "Settings",
            },
            { label: "Launch" },
          ],
        },
        {
          label: "Application 2"
        }
      ],
    },
    { label: "Cost managment" },
    {
      label: "Sources",
    },
    {
      label: "Really really",
    },
  ];

export default function Dropdown(){
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const toggleSubMenu = (e, index) => {
      e.stopPropagation();

      if (openSubMenu === index) {
        setOpenSubMenu(null);
      } else {
        setOpenSubMenu(index);
      }
  
      let submenu = e.target.querySelector("ul");
  
      if (!submenu) return;

      if (submenu.style.display === "none" || !submenu.style.display) {
        submenu.style.display = "block";
      } else {
        submenu.style.display = "none";
      }
    };
  
    const renderSubMenu = (subMenu) => {
      return (
        <ul className="submenu">
          {subMenu.map((subItem, index) => (
            <li key={index} onClick={toggleSubMenu}>
              <a className='Asubmenu'>
              <span className="dropdown-icon">{openSubMenu === index ? '▶' : '▼'}</span>
              {subItem.label}
              {subItem.submenu && renderSubMenu(subItem.submenu)}
              </a>
            </li>
          ))}
        </ul>
      );
    };
  
    return (
      <div>
        <ul>
          {menuData.map((item, index) => (
            <li key={index} onClick={(e) => toggleSubMenu(e,index)} className={openSubMenu === index ? 'selected' : ''}>
              <span className="dropdown-icon">{openSubMenu === index ? '▶' : '▼'}</span>
              <a className='AMenu'>
              {item.label}
              {item.submenu && renderSubMenu(item.submenu)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}