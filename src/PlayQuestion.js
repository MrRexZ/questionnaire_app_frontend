import React, {Component} from 'react';
import {QuestionnaireList} from './QuestionnaireList'
import axios from 'axios'

export class PlayQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: {},
            selectedAnsId : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:8000/getQuestion/"+ this.props.match.params.questionId)
            .then(res => {
                console.log(res)
                this.setState({
                    question: res.data
                })
            })
    }

    handleChange(e) {
        this.setState({
            selectedAnsId: e.target.value
        })
    }

    render() {
        const {question} =  this.state
        const answers = question['answers']
        const questionTitle = question['q_name']
        if (typeof answers === 'undefined') {
            return null
        }
        return (<div>
            <form>
                <label>{questionTitle}</label>
                {
                    answers.map(answer => (
                        <label className="radio" key={answer.ans_id}>
                            <input type="radio"
                                   name="test"
                                   onChange={this.handleChange}
                                   value={answer.ans_id}
                                   checked={this.state.selectedAnsId === answer.ans_id}
                            />
                            {answer.ans_name}
                        </label>
                    ))
                }
            </form>
        </div>);
    }
}