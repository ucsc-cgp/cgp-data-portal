/*
 * Commons
 * https://www.xxx.org/
 *
 * Commons landing page.
 */

// Core dependencies
import compStyles from './index.module.css'
import React from 'react'

class IndexPage extends React.Component {

    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className={compStyles.commons}>
                <div className={compStyles.wrapper}>
                    <h1>UCSC Boardwalk Data Browser</h1>
                    <h2>Explore and Export Genomics Research Data</h2>
                    <p>The UCSC Boardwalk Data Browser is a web-based platform for exploring and exporting genomics
                        data. This includes the metadata, and links to the actual data. The links come in two different
                        formats; cloud native URLs such as those supported by Amazon S3 and Google Cloud Storage, as
                        well as emerging GA4GH <a href="https://github.com/ga4gh/data-object-service-schemas" target="_blank">Data Object Service</a> standard URIs. You can easily search for data using
                        facets, and export the selected data, either locally to a manifest file or into the Broad
                        Institute's <a href="https://bvdp-saturn-prod.appspot.com/" target="_blank">Saturn</a>.</p>
                    <h2>Getting Started</h2>
                    <h3>Restricted Access Data</h3>
                    <p>The data you are viewing has restricted access. You must log in with an email address that has been
                        whitelisted. If your email is not whitelisted, you can request access at <a href="mailto:cgl@ucsc.edu">cgl@ucsc.edu</a>. To login,
                        click the login link at the top of the page.</p>
                    <h3>Exploring</h3>
                    <p>To start exploring, click the Data Browser link at the top of the page. You will see various boxes
                    with filters that you can apply to search the data. These are known as facets. At the bottom of the
                    page, there is a table showing all the selected data. As you filter the data, the contents of the
                        table will change.</p>
                    <p>By default, all data is selected when you first navigate to the data browser. If you want to look
                    for particular data, you can use the facet boxes to do so. Depending on the data you are viewing,
                    the facets you see may differ from those used here as examples, but you might see facets such as
                        Specimen Type, Center Name, and File ID.</p>
                    <p>For some facets, such as Specimen Type, you will see all the different values in the dataset, along
                    with the count of the number of instances of each value. Click checkboxes of the specimen types that
                        you want to view.</p>
                    <p>For other facets, such as the File ID, where every row has a different value, instead of clicking a
                    checkbox, enter the first few characters of the File ID. A dropdown of all file ids matching the
                        pattern will appear, and you can select the exact id.</p>
                    <h3>Exporting</h3>
                    <p>Once you have selected the relevant data in the data browser, you can export that data. You can
                        either export the data to your local disk as a TSV file, or you can send the data to <a href="https://bvdp-saturn-prod.appspot.com/" target="_blank">Saturn</a>, for
                        further processing in a FireCloud workspace. The data is sent to Saturn as a <a href="http://bd2k.ini.usc.edu/tools/bdbag/" target="_blank">BDBag</a>.</p>
                    <p>There are two buttons on the bottom right of the screen in the data browser. The upper button
                    exports to Saturn; the lower button downloads the data to your local disk. Click on the appropriate
                        button.</p>
                    <h2>About the Data Browser</h2>
                    <p>The data browser is composed of the open source software in the <a href="https://github.com/DataBiosphere" target="_blank">DataBiosphere organization</a> on
                        GitHub.</p>
                    <p><a href="https://github.com/DataBiosphere/cgp-boardwalk" target="_blank">Boardwalk</a> is the browser's web UI.</p>
                    <p><a href="https://github.com/DataBiosphere/azul" target="_blank">Azul</a> is an Elastic Search indexer, as well as an API to access the index.</p>
                    <p><a href="https://github.com/DataBiosphere/cgp-dashboard" target="_blank">Dashboard</a> handles authentication, authorization, and serving up static web content.</p>
                    <p><a href="https://github.com/DataBiosphere/cgp-deployment" target="_blank">CGP-Deployment</a> is the deployment piece that ties all the repos together.</p>
                </div>
            </div>
        )
    }
}

export default IndexPage
