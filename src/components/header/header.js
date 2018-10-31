/*
 * Commons
 * https://www.xxx.org/
 *
 * Commons header component.
 */

// Core dependencies
import Link from 'gatsby-link'
import React from 'react'
import compStyles from './header.module.css'

// Images
import commonsLogo from '../../../images/logo/logo-commons.png'

class Header extends React.Component {

    constructor () {
        super()
        this.state = {auth: false}
    }

    toggleAuthState = () => {
        this.setState({auth: !this.state.auth})
    };

    render () {
        return (
            <div className={compStyles.navBar}>
                <div className={compStyles.wrapper}>
                    <div className={compStyles.logo}>
                        <Link to="/"><img src={commonsLogo}/></Link>
                    </div>
                    <div className={compStyles.navLinks}>
                        <li><Link to="/" activeClassName={compStyles.active}>Home</Link></li>
                        <li><a href={process.env.GATSBY_EXPLORE_URL}>Data Browser</a></li>
                        <li>{this.state.auth ? <a className={compStyles.auth} onClick={this.toggleAuthState}><span>email-me@clevercanary.com</span><span>Logout</span></a> : <a onClick={this.toggleAuthState}>Login</a>}</li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
