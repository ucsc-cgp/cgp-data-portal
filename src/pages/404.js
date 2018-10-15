/*
 * Commons
 * https://www.xxx.org/
 *
 * Component displaying 404 (page not found) errors.
 */

// Core dependencies
import compStyles from './404.module.css';
import Link from 'gatsby-link';
import React from 'react';

const NotFoundPage = () => (
        <div className={compStyles.error}>
            <div className={compStyles.wrapper}>
                <div className={compStyles.commonsContent}>
                    <h1>Oops!</h1>
                    <p>We can’t find the page you were looking for.</p>
                    <p>Here are some helpful links instead:</p>
                    <Link to="/">Home Page</Link>
                    <Link to="/help/help">Help</Link>
                </div>
            </div>
        </div>
);

export default NotFoundPage;
