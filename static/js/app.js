import React from 'react';
import FilterableBanList from './components/FilterableBanList.jsx';
import banList from './test-data.js';


export default class AppContainer extends React.Component {
    constructor (props) {
        super(props);

        this.props = props;
        this.state = {};
    }

    render () {
        return <App />
    }
}

function App (props) {
    return <FilterableBanList banList={banList} /> ;
}
