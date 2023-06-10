import { useEffect } from 'react';
import Modal from '../Modal'

const AddModal = ({ addData, setAddData, handler, loading }) => {

    return (<Modal id={"batch_add_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Add Batch</h3>
            <div className='flex flex-col gap-3 mt-4'>
                <input
                    type="text"
                    required
                    defaultValue={""}
                    placeholder="Name"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, name: e.target.value })}
                />

                <input
                    type="text"
                    required
                    defaultValue={""}
                    placeholder="Description"
                    className="input input-bordered w-full"
                    onChange={e => setAddData({ ...addData, description: e.target.value })}
                />

                <button onClick={handler} className='btn btn-primary'>{!loading ? "Add Batch" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default AddModal;