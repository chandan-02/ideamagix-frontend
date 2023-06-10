import { useEffect, useState } from "react"
import { getAllInstructorLecture } from '../api/lecture'
import Tiles from '../components/home_instructor/Tile';

const HomeInstructor = () => {
      const [lectureData, setLectureData] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true)
            getAllInstructorLecture({ query: JSON.parse(localStorage.getItem('user'))?._id + `?populate=course` }).then(res => {
                  const lecture = res?.data?.data;
                  setLectureData(lecture);
                  setLoading(false);
            });
      }, []);

      return (<div className="w-full rounded bg-white p-5">
            <h1 className="p-3 text-2xl font-bold">Upcoming Lectures for {JSON.parse(localStorage.getItem('user'))?.name}</h1>
            <div className="flex flex-wrap gap-2 ">
                  {
                        lectureData?.map(itm => <Tiles key={itm?._id} name={itm?.course?.name} date={itm?.date} src={itm?.course?.image} />)
                  }
            </div>
      </div>)
}
export default HomeInstructor