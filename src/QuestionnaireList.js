import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";

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
            Select which questionnaire to play : <br />
            <ol>
                {questionnaireList.map(questionnaire => (
                    <li key={questionnaire.id}>
                        <Link to={{
                            pathname: '/playQuestion/' + questionnaire.id
                        }}>{questionnaire.questionnaire_name}</Link>
                    </li>
                ))}
            </ol>
        </div>)
    }
}