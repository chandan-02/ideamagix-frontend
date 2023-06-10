import { useEffect, useState } from "react"
import { getAllBatch, addBatch, updateBatch, deleteBatch } from '../api/batch'

import Table from "../components/batchComponents/table";
import AddModal from "../components/batchComponents/AddModal";
import EditModal from '../components/batchComponents/EditModal';

const Batch = () => {

  const [batcheData, setBatcheData] = useState([]);
  const [loading, setLoading] = useState(false);

  //add Edit Batch states
  const [loadingBatch, setLoadingBatch] = useState(false)
  const [batch, setBatch] = useState({})

  const handleAdd = async () => {
    setLoadingBatch(true)
    addBatch(batch).then(rs => { setBatch({}); window.location.reload() }).catch(er => setLoadingBatch(false))
  }

  const handleEdit = async () => {
    setLoadingBatch(true)
    let id = batch._id;
    let data = {
      name: batch.name,
      description: batch.description,
    }
    updateBatch({ query: id, data }).then(rs => { setBatch({}); window.location.reload() }).catch(er => setLoadingBatch(false))
  }

  useEffect(() => {
    setLoading(true)
    getAllBatch({ query: `` }).then(res => {
      const batch = res?.data?.data;
      setBatcheData(batch);
      setLoading(false);
    })
  }, []);

  return (<div className="w-full rounded bg-white">
    <AddModal addData={batch} setAddData={setBatch} handler={handleAdd} loading={loadingBatch} />
    <EditModal addData={batch} setAddData={setBatch} handler={handleEdit} loading={loadingBatch} />

    <Table
      tableHeading={["", "Name", "Description", "Actions"]}
      tableData={(!loading || batcheData?.length !== 0) ? batcheData : null}
      functions={[deleteBatch, setBatch]}
    />
  </div>)
}

export default Batch;