import Modal from '../Modal'

const EditModal = ({ addData, setAddData, handler, loading }) => {

    return (<Modal id={"batch_edit_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Edit Course</h3>
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
                    defaultValue={addData.description}
                    placeholder="Description"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, description: e.target.value })}
                />
                
                <button onClick={handler} className='btn btn-primary'>{!loading ? "Save Changes" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default EditModal;