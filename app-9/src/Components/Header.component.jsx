import React from 'react'
import {ReactComponent as Logo} from '../asset/logo.svg'
import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = (props)=>{
    console.log(props.userLoggedIn)
    return(
        <div className="header">
        <Link className='logo-contianer' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>HOME</Link>
            <Link className='option' to='/detail'>DETAIL</Link>
            {
                
                props.userLoggedIn ?
                <div className="option" onClick={props.handleLogInLogOut} to='/'>SIGN OUT</div>
                : <Link className="option" onClick={props.handleLogInLogOut} to='/signIn'>SIGN IN</Link>
            }
        </div>
        </div>
    )
}
 export default Header