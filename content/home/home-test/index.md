---
path: "/home/home-test/index"
date: "2018-11-07"
title: "MK added this page, it is the third home test page of page 1"
subTitle: "UCSC Boardwalk Data Browser"
---
# UCSC Boardwalk Data Browser (all Markdown)
## Explore and Export Genomics Research Data
The UCSC Boardwalk Data Browser is a web-based platform for exploring and exporting genomics data. This includes the metadata, and links to the actual data. The links come in two different formats; cloud native URLs such as those supported by Amazon S3 and Google Cloud Storage, as well as emerging GA4GH <a href="https://github.com/ga4gh/data-object-service-schemas" target="_blank">Data Object Service</a> standard URIs. You can easily search for data using facets, and export the selected data, either locally to a manifest file or into the Broad Institute's [Saturn](https://bvdp-saturn-prod.appspot.com/).

## Getting Started

### Restricted Access Data
The data you are viewing has restricted access. You must log in with an email address that has been whitelisted. If your email is not whitelisted, you can request access at [cgl@ucsc.edu](mailto:cgl@ucsc.edu). To login, click the login link at the top of the page.

### Exploring
To start exploring, click the Data Browser link at the top of the page. You will see various boxes with filters that you can apply to search the data. These are known as facets. At the bottom of the page, there is a table showing all the selected data. As you filter the data, the contents of the table will change.

By default, all data is selected when you first navigate to the data browser. If you want to look for particular data, you can use the facet boxes to do so. Depending on the data you are viewing, the facets you see may differ from those used here as examples, but you might see facets such as Specimen Type, Center Name, and File ID.

For some facets, such as Specimen Type, you will see all the different values in the dataset, along with the count of the number of instances of each value. Click checkboxes of the specimen types that you want to view.

For other facets, such as the File ID, where every row has a different value, instead of clicking a checkbox, enter the first few characters of the File ID. A dropdown of all file ids matching the pattern will appear, and you can select the exact id.

### Exporting
Once you have selected the relevant data in the data browser, you can export that data. You can
either export the data to your local disk as a TSV file, or you can send the data to [Saturn](https://bvdp-saturn-prod.appspot.com/), for further processing in a FireCloud workspace. The data is sent to Saturn as a [BDBag](http://bd2k.ini.usc.edu/tools/bdbag/).

There are two buttons on the bottom right of the screen in the data browser. The upper button
exports to Saturn; the lower button downloads the data to your local disk. Click on the appropriate button.

## About the Data Browser
The data browser is composed of the open source software in the [DataBiosphere organization](https://github.com/DataBiosphere) on GitHub.

[Boardwalk](https://github.com/DataBiosphere/cgp-boardwalk) is the browser's web UI.

[Azul](https://github.com/DataBiosphere/azul) is an Elastic Search indexer, as well as an API to access the index.

[Dashboard](https://github.com/DataBiosphere/cgp-dashboard) handles authentication, authorization, and serving up static web content.

[CGP-Deployment](https://github.com/DataBiosphere/cgp-deployment) is the deployment piece that ties all the repos together.
