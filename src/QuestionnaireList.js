import React, {Component} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export class QuestionnaireList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionnaireList: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/getQuestionnaireList/`)
            .then(res => {
                console.log(res.data);
                this.setState({questionnaireList: res.data});
            })
    }

    render() {
        const {questionnaireList} = this.state
        return (<div>
            <ul>
                {questionnaireList.map(item => (
                    <li key={item}>
                        <Link to={{
                            pathname: '/playQuestion/' + item
                        }}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>)
    }
}