 import { Toast } from 'antd-mobile';

function showToast() {
    Toast.info('This is a toast tips !!!', 1);
}

function showToastNoMask() {
    Toast.info('Toast without mask !!!', 2, null, false);
}

function successToast(info) {
    Toast.success(info, 1);
}

function failToast() {
    Toast.fail('Load failed !!!', 1);
}

function offline(val) {
    Toast.offline(val, 2);
}

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!');
    });
}

export {loadingToast,offline,failToast,showToast,showToastNoMask,successToast}