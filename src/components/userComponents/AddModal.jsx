import Modal from '../Modal'

const AddModal = ({ addData, setAddData, handler, loading }) => {

    return (<Modal id={"user_add_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Add New User</h3>
            <div className='flex flex-col gap-3 mt-4'>
                <input
                    type="text"

                    required
                    placeholder="Name"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, name: e.target.value })}
                />

                <input
                    type="text"
                    required
                    placeholder="Username"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, username: e.target.value })}
                />

                <input
                    type="text"
                    required
                    placeholder="Password"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, password: e.target.value, role: 'admin' })}
                />

                <select className="select select-bordered w-full " defaultValue={"Admin"} onChange={e => setAddData({ ...addData, role: e.target.value.toLowerCase() })}>
                    <option >Admin</option>
                    <option>Instructor</option>
                </select>

                <button onClick={handler} className='btn btn-primary'>{!loading ? "Add User" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default AddModal;