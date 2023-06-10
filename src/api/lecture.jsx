import Axios from "../utils/axios";
import Toast from '../utils/Toast';

const getAllLecture = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/lecture?${props?.query}`).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: err.response.data.message ?? `Error from Get All lecture`,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};

const getAllInstructorLecture = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/instructor/lecture/${props?.query}`).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: err.response.data.message ?? `Error from Get All lecture`,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};

const addLecture = async (data) => {
    return new Promise(function (resolve, reject) {
        Axios.post(`/admin/lecture`, data).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: err.response.data.message ?? err.response.data.data ?? `Error from Add lecture`,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};

const updateLecture = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.put(`/admin/lecture/${props.query}`, { ...props.data }).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: err.response.data.message ?? err.response.data.data ?? `Error from update lecture`,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};

const deleteLecture = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.delete(`/admin/lecture/${props.query}`).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: err.response.data.message ?? `Error from Delete lecture`,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};

export {
    getAllLecture,
    addLecture,
    updateLecture,
    deleteLecture,
    getAllInstructorLecture
}