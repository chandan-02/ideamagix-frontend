
//secured routes
import User from '../pages/user';
import Batch from '../pages/batch';
import Course from '../pages/course';
import Lecture from '../pages/lecture';

let routes = [
    {
        path: '/user',
        component: User,
    },
    {
        path: '/batch',
        component: Batch,
    },
    {
        path: '/course',
        component: Course,
    },
    {
        path: '/',
        component: Lecture,
    },
]


export default routes;