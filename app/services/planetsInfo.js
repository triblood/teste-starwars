import React, {Component} from 'react'
var axios = require('axios');


class App extends Component{
	constructor()
	{
		super();
		this.state = {
			tweet: []
		}
	}

	componentDidMount(){
		axios.get('https://swapi.co/api/planets/')
		.then(({data}) => {
            console.log(data)
			this.setState({
				tweet: data
			})
		})
		.catch((err) => {})
	}

	render()
	{
        const tweetL = this.state.tweet.map((el, index) => {
            return <div key={index}>
                
            </div>
        });
	}
}

export default App;