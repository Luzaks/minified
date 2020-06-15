import React, {Component} from 'react';
import Jumbotron from './Jumbotron'


class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            course_modules: [
                { id: 1, title: 'Hey', description: 'I am a', active: false },
                { id: 2, title: 'New', description: 'Role app', active: false },
                { id: 3, title: 'App', description: 'Using', active: false },
                { id: 4, title: 'React', description: 'Components', active: false },
            ]
        }
    }

    render(){
        return(
            <div>
                <Jumbotron />
            </div>
        );
    }
}

export default Home;