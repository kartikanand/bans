import React from 'react';
import BanList from './BanList.jsx';

import {states as STATES, categories as CATEGORIES} from '../test-data.js';


class Filter extends React.Component {
    constructor (props) {
        super(props);

        this.props = props;
        this.state = {
            selectedState: 'all',
            selectedCategory: 'all'
        };

        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStateChange (ev) {
        this.setState({selectedState: ev.target.value});
    }

    handleCategoryChange (ev) {
        this.setState({selectedCategory: ev.target.value});
    }

    handleSubmit (ev) {
        ev.preventDefault();

        const state = this.state.selectedState;
        const category = this.state.selectedCategory;

        this.props.filterList(state, category);
    }

    render () {
        const categories = CATEGORIES.map((category, index) =>
            <option key={index} >{category}</option>
        );

        const states = STATES.map((state, index) =>
            <option key={index} >{state}</option>
        );

        return (
            <div className='center-block'>
                <form className='filter' onSubmit={this.handleSubmit}>
                    <select value={this.state.selectedState} onChange={this.handleStateChange}>{states}</select>
                    <select value={this.state.selectedCategory} onChange={this.handleCategoryChange}>{categories}</select>

                    <button action="submit">go</button>
                </form>
            </div>
        );
    }
}


export default class FilterableBanList extends React.Component {
    constructor (props) {
        super(props);

        this.props = props;
        this.state = {
            banList: this.props.banList,
            filteredList: this.props.banList
        };

        // bind functions with this
        this.filterList = this.filterList.bind(this);
    }

    filterList (state, category) {
        let filteredList = this.state.banList;

        if (state != 'all') {
            filteredList = filteredList.filter((ban) => {
                if (ban.state == state) {
                    return true;
                }

                return false;
            });
        }

        if (category != 'all') {
            filteredList = filteredList.filter((ban) => {
                if (ban.category == category) {
                    return true;
                }

                return false;
            });
        }

        this.setState({
            filteredList: filteredList
        });
    }

    render () {
        return (
            <div>
                <Filter filterList={this.filterList} />
                <BanList banList={this.state.filteredList} />
            </div>
        );
    }
}
