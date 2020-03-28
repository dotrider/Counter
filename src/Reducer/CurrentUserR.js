
const currentUser = ( state = {}, action) => {
    const {type, payload} = action
    switch(type){
        case 'SET_USER':
            return {...state, user: payload, loggedIn: true}
        case 'LOG_OUT':
            return {...state, user: {}, loggedIn: false}
        default:
            return state
    }
}

export default currentUser;