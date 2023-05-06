import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  MdOutlineNotificationsNone,
  MdInventory2,
  MdBookmarkRemove,
  MdOutlineMarkChatRead,
  MdOutlineArchive,
} from "react-icons/md";
import { useSelector } from 'react-redux';
import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
// ];
// export const options = {
//   title: "My Daily Activities",
// };



const Dashboard = ({datag}) => {
  const { files, unassigned_files } = useSelector(
    (stateData) => ({
      ...stateData.files,
    })
  );

   const {is_organisor, is_agent } = useSelector(
     (stateData) => ({
       ...stateData.auth,
     })
  );

  const router = useRouter();
  
  useEffect(() => {
    if (is_agent) {
      router.push("/files")
    }
  },[])

  // console.log("sis beh", files?.length + unassigned_files?.length)

  const data = [
    ["Task", "Total Summary"],
    ["Total de tramites", datag?.length],
    ["Archivados", 0],
    ["Sin asignar", unassigned_files?.length],
    ["Asignados", files?.length],
  ];
  const options = {
    title: "Resumen de todo",
  };
  
return (
  <Layout>
    <div className="px-4">
      <div className="main-title">
        <p className="fw-bold">Panel principal</p>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <p className="text-secondary">Total de tramites</p>
            <MdInventory2 />
          </div>
          <span className="text-secondary fw-bold">
            {datag?.length}
          </span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-secondary">Sin asignar</p>
            <MdBookmarkRemove />
          </div>
          <span className="text-secondary fw-bold">
            {unassigned_files?.length}
          </span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-secondary">Asignados</p>
            <MdOutlineMarkChatRead />
          </div>
          <span className="text-secondary fw-bold">{files?.length}</span>
        </div>

        <div className="card">
          <div className="card-inner">
            <p className="text-secondary">Archivados</p>
            <MdOutlineArchive />
          </div>
          <span className="text-secondary fw-bold">0</span>
        </div>
      </div>

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  </Layout>
);
};

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-files`)
  // const res = await fetch("http://127.0.0.1:8000/api/all-files")
  const datag = await res.json()

  return {
    props: {
      datag,
    },
  }
}

export default Dashboard