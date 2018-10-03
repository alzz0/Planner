export const createProject=(project)=>{
    return (dispatch,state)=>{
     dispatch({type:"CREATE_PROJECT",project})   
    }
}