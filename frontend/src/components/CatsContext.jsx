import React, { Component, createContext } from 'react';

const CatsContext = createContext([]);

class CatsProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            catsByName: [],
            catName: "",
            isBreedsMode: true
        }
        this.apiURL = "http://localhost:4000/api/breeds";
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getCats = this.getCats.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async componentWillMount() {
        const catsRes = await fetch(this.apiURL);
        const { cats } = await catsRes.json();
        this.setState({cats});
        
    }

    handleInputChange(event) {
        event.persist();
        this.setState({catName: event.target.value});
    }

    async getCats(event) {
        event.persist();
        event.preventDefault();
        // filter cats
        // this.setState({ cats: this.state.cats.filter(cat => cat.name.includes(this.state.catName))});
        const res = await fetch(`${this.apiURL}/${this.state.catName}`);
        const { cats } = await res.json();
        this.setState({catsByName: cats, isBreedsMode: false});
    }

    handleClick() {
        const { isBreedsMode } = this.state;
        if (!isBreedsMode)
            this.setState({ isBreedsMode: true, catsByName: [] })
    }

    render() {
        const { cats, catName, catsByName, isBreedsMode } = this.state;
        const { handleInputChange, getCats, handleClick } = this;
        return (
            <CatsContext.Provider value={{ 
                cats, 
                catName,
                getCats,
                handleInputChange,
                catsByName,
                isBreedsMode,
                handleClick }}>
                { this.props.children }
            </CatsContext.Provider>
        );
    }
}

export {
    CatsContext,
    CatsProvider
}