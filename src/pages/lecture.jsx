import { useEffect, useState } from "react"
import { addLecture, deleteLecture, getAllLecture, updateLecture } from '../api/lecture'
import { getAllCourse } from '../api/course'
import { getAllUser, getTotal } from '../api/user'

import Table from "../components/lectureComponents/table";
import AddModal from "../components/lectureComponents/AddModal";
import EditModal from "../components/lectureComponents/EditModal";
import Stat from "../components/lectureComponents/Stat";

const Lecture = () => {
    const [lectureData, setLectureData] = useState([]);
    const [totals, setTotals] = useState({})
    const [courseData, setCourseData] = useState([]);
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false);

    //add Edit Lecture states
    const [loadingLecture, setLoadingLecture] = useState(false)
    const [lecture, setLecture] = useState({})

    const handleAdd = async () => {
        setLoadingLecture(true)
        addLecture(lecture).then(rs => { setLecture({}); window.location.reload() }).catch(er => setLoadingLecture(false))
    }

    const handleEdit = async () => {
        setLoadingLecture(true)
        let id = lecture._id;
        let data = {
            instructor: lecture?.instructor?._id ?? lecture?.instructor,
            date: lecture.date
        }
        updateLecture({ query: id, data }).then(rs => { setLecture({}); window.location.reload() }).catch(er => setLoadingLecture(false))
    }

    useEffect(() => {
        setLoading(true)
        getAllCourse({ query: `` }).then(res => {
            const course = res?.data?.data;
            setCourseData(course);
        });
        getAllUser({ query: `` }).then(res => {
            const user = res?.data?.data;
            setUserData(user);
        });
        getAllLecture({ query: `populate=course,instructor` }).then(res => {
            const lecture = res?.data?.data;
            setLectureData(lecture);
            setLoading(false);
        });
        getTotal().then(res => {
            setTotals(res?.data?.data)
        })
    }, []);

    return (
        <>
            <div className="mb-5 flex items-center">
                <div class="stats shadow">
                    <Stat text={"Total Lectures"} value={totals?.totalLectures ?? 0} />
                    <Stat text={"Total Instructors"} value={totals?.totalInstructor ?? 0} />
                    <Stat text={"Total Admins"} value={totals?.totalAdmin ?? 0} />
                    <Stat text={"Total Courses"} value={totals?.totalCourse ?? 0} />
                    <Stat text={"Total Batches"} value={totals?.totalBatch ?? 0} />
                </div>
            </div>
            <div className="w-full rounded bg-white">
                <AddModal courseData={courseData} userData={userData} addData={lecture} setAddData={setLecture} handler={handleAdd} loading={loadingLecture} />
                <EditModal courseData={courseData} userData={userData} addData={lecture} setAddData={setLecture} handler={handleEdit} loading={loadingLecture} />

                <Table
                    tableHeading={["", "Course Name", "Instructor", "Date", "Actions"]}
                    tableData={(!loading || lectureData?.length !== 0) ? lectureData : null}
                    functions={[deleteLecture, setLecture]}
                />
            </div>
        </>
    )
}
export default Lecture