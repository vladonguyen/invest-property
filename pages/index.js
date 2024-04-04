import { gql } from "@apollo/client";
import client from "client";

export default function Home(props) {
  console.log("PROPS:", props)
  return <div>Next JS &amp; WordPress course.</div>;
}

export const getStaticProps = async () => {
  const {data} = await client.query({
    query: gql`
    query MyQuery3 {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          title
          blocksJSON
        }
      }
    }
    `
  })
  return {
    props: {
      blocks: JSON.parse(data.nodeByUri.blocksJSON),
      myexampleprop: "test"
    },
  };
};