import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
   const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { 
            offsetPagination: { size: 3, offset: ${((filters.page || 1) -1) * 3} } }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
            }
          }
        }
      `,
    });
    console.log("SERVER SIDE: ", data.properties.nodes);
    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

export default handler;