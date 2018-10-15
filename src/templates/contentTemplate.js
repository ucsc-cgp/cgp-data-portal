/*
 * Commons
 * https://www.xxx.org/
 *
 * Commons content template component.
 */

// Core dependencies
import React from "react";

// App dependencies
import compStyles from './contentTemplate.module.css';

// the data prop will be injected by the GraphQL query below.
export default function Template({data}) {

    const {markdownRemark} = data; // data.markdownRemark holds our post data
    const {frontmatter, html} = markdownRemark;

    if (frontmatter) {}

    return (
        <div className={compStyles.content}>
            <div className={compStyles.wrapper}>
                <div className={compStyles.commonsContent}>
                    <div className={compStyles.markdownContent}>
                        <div dangerouslySetInnerHTML={{__html: html}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// modified to find the page by id which is passed in as context
export const pageQuery = graphql`
  query ContentPostByPath($id: String!) {
    markdownRemark(id: { eq: $id  }) {
      id
      html
      fields{
            path
            gitHubPath
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subTitle
        }
      }
  }
`;
