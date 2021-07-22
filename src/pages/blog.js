import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allFile.nodes
                    .filter((n) => n.extension === "mdx")
                    .map((n) => (
                        <li key={n.name}>{n.name}</li>
                    ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
                extension
            }
        }
    }
`;

export default BlogPage;
