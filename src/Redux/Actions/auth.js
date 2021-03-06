import API from '../../API';

export const updateUser = (userDetails) => {
    return (dispatch) => {
        API.post("/user/update", userDetails)
        .then((response) => {
            let toestDetails = {
                type : 'info',
                title : 'User Updated',
                description : 'Your user profile updated successfully !!!'
            };
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        }).catch((error) => {
            let toestDetails = {
                type : 'error',
                title : 'Update failed',
                description : 'Failed to update user profile :('
            };
            dispatch({type: "FIRE_TOAST", payload : toestDetails});
        })
    }
}

export const signIn = (userProfile) => {
    return {
        type: "SIGN_IN",
        payload: {
            userId: userProfile.getId().substring(8),
            firstName : userProfile.getGivenName(),
            lastName : userProfile.getFamilyName(),
            email : userProfile.getEmail()
        }
    }
}

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}