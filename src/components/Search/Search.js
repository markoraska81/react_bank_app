import React, {Component} from 'react';
import './Search.scss';

class Search extends Component {
  // po deafultu imamo STATE
  // koji ce imati VALUE a to ce biti prazan string
  state = {
    searchTerm: ""
  }

  componentDidUpdate(prevprops, prevState) {
    // UPDATE se radi kada se promeni SEARCHTERM
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.filterData();
    }
  }

  // f-ja treba da vrati isfiltrirane podatke
  filterData() {
    const {data, onDataFilter} = this.props;
    const {searchTerm} = this.state;

    const filteredData = data.filter(item => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    onDataFilter(filteredData)
  }

  onSearchChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    const {searchTerm} = this.state;
    return(
      <input className="search"
             onChange={(e) => this.onSearchChange(e)}
       // onChange je event koji radi na promenu vrednosti
             value={searchTerm} />
       // sa ovim VALUE cemo povezati SEARCH polje i STATE
    )
  }
}


export {Search};
