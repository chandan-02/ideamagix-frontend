import Modal from '../Modal'

const EditModal = ({ addData, setAddData, handler, loading }) => {
    let role = `${addData?.role?.charAt(0).toUpperCase()}${addData?.role?.slice(1)}` ?? "Admin";
 
    return (<Modal id={"user_edit_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Edit user</h3>
            <div className='flex flex-col gap-3 mt-4'>
                <input
                    type="text"
                    defaultValue={addData.name}
                    required
                    placeholder="Name"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, name: e.target.value })}
                />

                <input
                    type="text"
                    required
                    defaultValue={addData.username}
                    placeholder="Username"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, username: e.target.value })}
                />

                <input
                    type="text"
                    required
                    placeholder="New Password"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, password: e.target.value })}
                />
                <select className="select select-bordered w-full" value={role} onChange={e => setAddData({ ...addData, role: e.target.value.toLowerCase() })}>
                    <option>Admin</option>
                    <option>Instructor</option>
                </select>
                <button onClick={handler} className='btn btn-primary'>{!loading ? "Save Changes" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default EditModal;