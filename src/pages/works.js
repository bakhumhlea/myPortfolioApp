import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
//import Layout from '../components/layout';

const WorksPage = () => (
    <StaticQuery
        query={graphql`
            query {
                allContentfulWork {
                    edges {
                        node {
                            name
                            description
                            workDate
                            images {
                                id
                            }
                        }
                    }
                }
            }
        `}
        render={data=> (
            <div>
                <h3>
                    Feature works!
                </h3>
                {data.allContentfulWork.edges.map((work,index)=>(
                    <div key={index}>
                        <h4>{work.node.name}</h4>
                        <p>{work.node.description}</p>
                        <p>{work.node.workDate}</p>
                    </div>
                ))}
                <Link to="/">Back</Link>
            </div>
        )}
    />
)

export default WorksPage