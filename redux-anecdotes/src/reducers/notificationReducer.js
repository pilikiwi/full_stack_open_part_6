const notificationReducer = (state='Notification shows here...', action) => {

    switch(action.type){
    case 'setNotification':
        return action.data
    case 'removeNotification':
        return ''
    default:
        return state
    }
}



export const setNotification = (data, timer) => {
    return  {
        type:'setNotification',
        data,
        }
}

export const removeNotification = () => {

    return {
            type: 'removeNotification',
        }

}

export default notificationReducer