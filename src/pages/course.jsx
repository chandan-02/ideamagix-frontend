import { useEffect, useState } from "react"
import { getAllCourse, addCourse, updateCourse, deleteCourse } from '../api/course'
import { getAllBatch } from '../api/batch'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

import AddModal from "../components/courseComponents/AddModal";
import EditModal from '../components/courseComponents/EditModal';

import Tile from '../components/courseComponents/Tile'

const Course = () => {
  const [courseData, setCourseData] = useState([]);
  const [batcheData, setBatcheData] = useState([]);
  const [loading, setLoading] = useState(false);

  //add Edit Course states
  const [loadingCourse, setLoadingCourse] = useState(false)
  const [course, setCourse] = useState({})

  const handleAdd = async () => {
    setLoadingCourse(true)
    addCourse(course).then(rs => { setCourse({}); window.location.reload() }).catch(er => setLoadingCourse(false))
  }

  const handleEdit = async () => {
    setLoadingCourse(true)
    let id = course._id;
    let data = {
      name: course.name,
      level: course.level,
      description: course.description,
      image: course.image,
      batches: course.batches,
    }
    updateCourse({ query: id, data }).then(rs => { setCourse({}); window.location.reload() }).catch(er => setLoadingCourse(false))
  }

  useEffect(() => {
    setLoading(true)
    getAllBatch({ query: `` }).then(res => {
      const batch = res?.data?.data;
      setBatcheData(batch);
    })
    getAllCourse({ query: `` }).then(res => {
      const course = res?.data?.data;
      setCourseData(course);
      setLoading(false);
    })
  }, []);

  return (<div className="w-full mb-4">
    <AddModal batcheData={batcheData} addCourseData={course} setAddCourseData={setCourse} handler={handleAdd} loading={loadingCourse} />
    <EditModal batcheData={batcheData} addCourseData={course} setAddCourseData={setCourse} handler={handleEdit} loading={loadingCourse} />
    <div className="flex flex-wrap gap-8">
      {(!loading && courseData?.length !== 0) ?
        courseData?.map(itm =>
          <Tile data={itm} key={itm?._id} functions={[deleteCourse, setCourse]} batch={batcheData}
          />)
        : <div className="alert alert-error">
          <ExclamationCircleIcon className='h-10 w-10' />
          <span>Sorry! No Data Found</span>
        </div>
      }
    </div>
  </div>)
}
export default Course