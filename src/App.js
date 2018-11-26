import React, {Component} from 'react';
import {QuestionnaireList} from './QuestionnaireList'
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/questionnaire">Open Questionnaire List</Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path="/questionnaire" component={QuestionnaireList} />
                </div>
            </Router>
        );
    }
}

export default App;
