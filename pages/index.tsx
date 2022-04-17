import _ from 'lodash'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler } from "react-hook-form";

import getConnections, { Connection, ConnectionInput } from '@/api/connections';
import ConnectionCard from '@/components/ConnectionCard';
import Layout from '@/components/Layout'
import SideBar, { SearchInputs } from '@/components/SideBar';

interface IndexProps {
  connections: Connection[];
}

const IndexPage = ({ connections: incomingConnections }: IndexProps) => {
  const router = useRouter()
  const [connections, setConnections] = useState(incomingConnections)

  const handleSearch: SubmitHandler<SearchInputs> = async data => {
    const { from, to, dateTime } = data;
    const connectionsData = await getConnections({
      from,
      to,
      dateTime,
    });
    setConnections(connectionsData)
    router.push({ pathname: "/", query: data }, undefined, { shallow: true })
  };

  return (
    <Layout title="Next Rails">
      <SideBar handleSearch={handleSearch} className='w-3/12 h-full' />
      <div className={`bg-secondary shadow-md overflow-scroll h-full transition-all duration-500 ${connections.length > 0 ? "w-full  p-2" : "w-0"}`}>
        {connections.length > 0 && connections.map((connection, i) => (
          <ConnectionCard className="mx-auto mb-4" key={i} connection={connection} />
        ))}
      </div>

    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<IndexProps | object, ConnectionInput> = async (context) => {
  const { from, to, dateTime } = context.query;
  let connections = []
  if (!_.isEmpty(context.query)) {
    connections = await getConnections({
      from: from as string,
      to: to as string,
      dateTime: dateTime as string,
    });
  }
  return {
    props: {
      connections
    },
  }

}

export default IndexPage
