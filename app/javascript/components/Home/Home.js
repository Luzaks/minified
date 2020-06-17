import React, {Component} from 'react';
import Jumbotron from './Jumbotron'
import Table from './Table/Table'


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

    handleVideoChange(item, event){
        event.preventDefault()

        let course_modules = [...this.state.course_modules]
        
        course_modules.map( data => {
            data.active.false;
        });
        item.active = !item.active;
        course_modules[item.id - 1] = item;
        this.setState({course_modules});
    }

    render(){
        return(
            <div>
                <Jumbotron />
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={ this.state.course_modules }/>
            </div>
        );
    }
}

export default Home;