import Modal from '../Modal'
import UploadImage from '../../utils/imageUpload';
import Chip from './chip';

const EditModal = ({ batcheData, addCourseData, setAddCourseData, handler, loading }) => {

    const handleChipClick = (method, id) => {

        if (method == 'add') {
            setAddCourseData(prev => {
                return {
                    ...prev,
                    batches: prev?.batches ? [...prev?.batches, id] : [id]
                }
            })
        }
        if (method == 'remove') {
            setAddCourseData(prev => {
                const arr = prev?.batches?.filter(itm => itm !== id);
                return {
                    ...prev,
                    batches: arr
                }
            })
        }
    }

    return (<Modal id={"course_edit_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Edit Course</h3>
            <div className='flex flex-col gap-3 mt-4'>
                <input
                    type="text"
                    required
                    placeholder="Name"
                    defaultValue={addCourseData.name}
                    className="input input-bordered w-full"
                    onChange={e => setAddCourseData({ ...addCourseData, name: e.target.value })}
                />
                <input
                    type="text"
                    required
                    placeholder="Level"
                    className="input input-bordered w-full"
                    defaultValue={addCourseData.level}
                    onChange={e => setAddCourseData({ ...addCourseData, level: e.target.value })}
                />
                <input
                    type="text"
                    required
                    placeholder="Description"
                    className="input input-bordered w-full"
                    defaultValue={addCourseData.description}
                    onChange={e => setAddCourseData({ ...addCourseData, description: e.target.value })}
                />
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" onChange={async e => {
                    const url = await UploadImage(e.target.files[0], `course_${(new Date()).toISOString()}`);
                    setAddCourseData({ ...addCourseData, image: url })
                }} />
                <div>
                    <p className='text-sm'>Add Batch</p>
                    <div className='flex gap-2 mt-2 flex-wrap'>
                        {
                            batcheData?.map(itm => {
                                return <Chip key={itm?._id} name={itm?.name} id={itm?._id} selected={addCourseData?.batches?.includes(itm?._id) ? true : false} handler={handleChipClick} />
                            })
                        }

                    </div>
                </div>
                <button onClick={handler} className='btn btn-primary'>{!loading ? "Save Changes" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default EditModal;