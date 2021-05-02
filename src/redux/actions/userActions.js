

export const setCurrentUser = (user) => ({
        type: 'SET_CURRENT_USER',
        payload: user
    
})


export const fromSignUp = (status) => ({
  type: 'FROM_SIGN_UP',
  payload: status
})

export default {setCurrentUser,fromSignUp}