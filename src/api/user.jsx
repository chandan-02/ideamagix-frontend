import Axios from "../utils/axios";
import Toast from '../utils/Toast';

const getAllUser = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/user?${props?.query}`).then((res) => {
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
                    message: err.response.data.message ?? `Error from Get All user`,
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

const getTotal = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/user/total`).then((res) => {
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
                    message: err.response.data.message ?? `Error from Get Totals`,
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
const addUser = async (data) => {
    return new Promise(function (resolve, reject) {
        Axios.post(`/admin/user`, data).then((res) => {
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
                    message: err.response.data.message ?? `Error from Add user`,
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

const updateUser = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.put(`/admin/user/${props.query}`, { ...props.data }).then((res) => {
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
                    message: err.response.data.message ?? `Error from update user`,
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

const deleteUser = async (props) => {
    return new Promise(function (resolve, reject) {
        Axios.delete(`/admin/user/${props.query}`).then((res) => {
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
                    message: err.response.data.message ?? `Error from Delete user`,
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
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    getTotal
}