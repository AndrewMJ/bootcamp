//Action exports a function(just like a reducer)
//the function must return an object

export default function(){
	return{
		type: 'UPDATE_HOME',
		payload: "User clicked the button"
	}
} 