import { call, put, takeEvery } from 'redux-saga/effects';
import Users from '../../components/UsersComponent';


const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function getApi(){
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => {throw error})
}

function* fetchUser(action){
    try {
        const users = yield call(getApi);
        yield put({ type: 'GET_USERS_SUCCESS', users: users});
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message});
    }
}

function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED', fetchUser);
}

export default userSaga;