import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePoll } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'lukemiller'

export function handleInitialData () {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, polls }) => {
                dispatch(receiveUsers(users))
                dispatch(receivePoll(polls))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}