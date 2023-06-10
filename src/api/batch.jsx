import Axios from "../utils/axios";
import Toast from '../utils/Toast';

const getAllBatch = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/batch?${props?.query}`).then((res) => {
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
                    message: err.response.data.message ?? `Error from Get All batch`,
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

const addBatch = async (data) => {
    return new Promise(function (resolve, reject) {
        Axios.post(`/admin/batch`, data).then((res) => {
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
                    message: err.response.data.message ?? `Error from Add batch`,
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

const updateBatch = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.put(`/admin/batch/${props.query}`, { ...props.data }).then((res) => {
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
                    message: err.response.data.message ?? `Error from update batch`,
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

const deleteBatch = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.delete(`/admin/batch/${props.query}`).then((res) => {
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
                    message: err.response.data.message ?? `Error from Delete batch`,
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
    getAllBatch,
    addBatch,
    updateBatch,
    deleteBatch
}