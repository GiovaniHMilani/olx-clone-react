const initialState = {
	name: 'Giovani Milani',
	email: 'giovanimilani11@gmail.com',
	logged: true
}

const userReducer = (state = initialState, action) => {

	if(action.type === 'changeName') {
		return { ...state, name: action.payload.name }
	}
	
	return state
}

export default userReducer;
