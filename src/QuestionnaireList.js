import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import {SERVER_API_URL, SERVER_PORT} from "./constants/environment";

export class QuestionnaireList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionnaireList: []
        }
    }

    componentDidMount() {
        axios.get(SERVER_API_URL + ":" + SERVER_PORT + "/getQuestionnaireList/")
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