import { useEffect, useState } from "react"
import {
  getAllUser,
  addUser,
  updateUser,
  deleteUser
} from '../api/user'

import Table from "../components/userComponents/table";
import AddModal from "../components/userComponents/AddModal";
import EditModal from '../components/userComponents/EditModal';

const User = () => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  //add Edit User states
  const [loadingUser, setLoadingUser] = useState(false)
  const [user, setUser] = useState({})

  const handleAdd = async () => {
    setLoadingUser(true)
    addUser(user).then(rs => { setUser({}); window.location.reload() }).catch(er => setLoadingUser(false))
  }

  const handleEdit = async () => {
    setLoadingUser(true)
    let id = user._id;
    let data = {
      name: user.name,
      username: user.username,
      password: user.password,
      role: user.role,
    }
    updateUser({ query: id, data }).then(rs => { setUser({}); window.location.reload() }).catch(er => setLoadingUser(false))
  }

  useEffect(() => {
    setLoading(true)
    getAllUser({ query: `` }).then(res => {
      const user = res?.data?.data;
      setUserData(user);
      setLoading(false);
    })
  }, []);

  return (<div className="w-full rounded bg-white">
    <AddModal addData={user} setAddData={setUser} handler={handleAdd} loading={loadingUser} />
    <EditModal addData={user} setAddData={setUser} handler={handleEdit} loading={loadingUser} />

    <Table
      tableHeading={["", "Name", "User Name", "Role", "Actions"]}
      tableData={(!loading || userData?.length !== 0) ? userData : null}
      functions={[deleteUser, setUser]}
    />
  </div>)
}

export default User;