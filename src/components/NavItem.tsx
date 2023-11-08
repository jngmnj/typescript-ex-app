import React from 'react'
import { Link } from 'react-router-dom'

interface NavItemProps {
    children: React.ReactNode;
    to: string;
}
const NavItem = (props: NavItemProps) => {
  return (
    <div className='border m-2'><Link to={props.to}>{props.children}</Link></div>
  );
};

export default NavItem