import React from 'react';

<<<<<<< HEAD
const Nav = (props) => {
    return (
    <header className="nav flex-xs-parent p-xs-s">
    	<div>
    		<h5>{props.projectTitle}</h5>
    	</div>
    	<nav>
    		<ul className="flex-xs-parent flex-xs-justify-end">
                {props.children.map((o,i)=>(<li key={i}>{o}</li>))}
    		</ul>
    	</nav>
=======
const HeaderNav = ({title,children}) => {
    return (
    <header className="nav flex-xs-parent p-xs-s">
    	<div>
    		<h1 style={{fontSize:'1em'}}>{title}</h1>
    	</div>
		<Nav>{children||[]}</Nav>
>>>>>>> 207bc2fc5d0591acb010c247b77cb28af067651b
    </header>
    )
}

<<<<<<< HEAD
export default Nav;
=======
const Nav = ({children}) => {
	return (
	<nav>
		<ul className="flex-xs-parent flex-xs-justify-end">
			{children.map((o,i)=>(<li key={i}>{o}</li>))}
		</ul>
	</nav>
	);
}

export {HeaderNav, Nav};
>>>>>>> 207bc2fc5d0591acb010c247b77cb28af067651b
