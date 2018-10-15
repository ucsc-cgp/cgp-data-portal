/*
 * Commons
 * https://www.xxx.org/
 *
 * Commons footer component.
 */

// Core dependencies
import compStyles from './footer.module.css'
import Link from 'gatsby-link'
import React from 'react'

const Footer = () => (
    <div className={compStyles.footer}>
        <div className={compStyles.wrapper}>
            <div className={compStyles.footerLinks}>
                <div>
                    <li><a href="https://www.ucsc.edu">UCSC</a></li>
                    <li><a href="https://ucscgenomics.soe.ucsc.edu/">UCSC Genomics Institute</a></li>
                    <li><a href="https://cgp.genomics.ucsc.edu/">UCSC Computational Genomics Platform</a></li>
                    <li><Link to="/about/about">About</Link></li>
                    <li><Link to="/help/help">Help</Link></li>
                    <li><Link to="/privacy/privacy">Privacy Policy</Link></li>
                </div>
                <div>
                    <li><a href="mailto:broconno@ucsc.edu" target="_top">Email</a></li>
                    <li><a href="https://www.facebook.com/UCSCGenomicsInstitute/?fref=ts">Facebook</a></li>
                    <li><a href="https://twitter.com/ucscgenomics">Twitter</a></li>
                </div>
            </div>
            <div className={compStyles.copyright}>Copyright © 2018, The Regents of the University of California, Santa Cruz. All Rights Reserved. Apache-2.0 licence.
            </div>
        </div>
    </div>
)

export default Footer
