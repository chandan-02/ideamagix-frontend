import { useEffect } from 'react'
import Modal from '../Modal'


const AddModal = ({ courseData, userData, addData, setAddData, handler, loading }) => {

    useEffect(() => {
        setAddData({ ...addData, course: courseData[0]?._id, instructor: userData[0]?._id })
    }, [courseData])


    return (<Modal id={"lecture_add_modal"} component={
        <div>
            <h3 className="font-bold text-lg">Add Lecture</h3>
            <div className='flex flex-col gap-3 mt-4'>

                <p className='text-sm'>Select Course</p>
                <select className="select select-bordered w-full" onChange={e => {
                    setAddData({ ...addData, course: courseData.find(itm => itm?.name === e.target.value)._id })
                }}>
                    {
                        courseData?.map(itm => <option key={itm?._id}>{itm?.name}</option>)
                    }
                </select>

                <p className='text-sm'>Select Instructor</p>
                <select className="select select-bordered w-full" onChange={e => {
                    setAddData({ ...addData, instructor: userData.find(itm => itm?.name === e.target.value && itm?.role)?._id })
                }}>
                    {
                        userData?.map(itm => {
                            if (itm?.role === 'instructor') {
                                return <option key={itm?._id}>{itm?.name}</option>
                            }
                        })
                    }

                </select>
                <input min={new Date().toISOString().split('T')[0]} type="date" className='border-[1px] border-gray-400 py-2 px-3 rounded' onChange={e => setAddData({ ...addData, date: (new Date(e.target.value)).toISOString() })} />
                <button onClick={handler} className='btn btn-primary'>{!loading ? "Add Lecture" : <span className="loading loading-infinity loading-md"></span>}</button>
            </div>
        </div>}
    />)
}

export default AddModal;