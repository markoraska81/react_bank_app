import React, {Component, Fragment} from 'react';
import './App.scss';


import {Header} from './components/Header/Header';
import {Cards} from './components/Cards/Cards';
import {Popup} from './components/Popup/Popup';
import {FormAdd} from './components/FormAdd/FormAdd';
import {FormView} from './components/FormView/FormView';
import {Button} from './components/Button/Button';
import {Footer} from './components/Footer/Footer';
import {Communicators} from './Communicators';



class App extends Component {

  state = {
    data: [],
    filteredData: [],
    popupOpenedAdd: false,
    popupOpenedView: false,
    formData: null
  }

  componentDidMount() {
    this.fatchData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.data.length !== this.state.data.length) {
  //     this.setState({
  //       filteredData: this.state.data
  //     })
  //   }
  // }

  formatData(responseData) {
    const data = [];
    for (const item in responseData) {
      data.push({
        ...responseData[item],
        id: item
      })
    }
    return data;
  }

  onPopupOpenAdd() {
    this.setState({
      popupOpenedAdd: true
    })
  }


  onPopupClose() {
    this.setState({
      popupOpenedAdd: false,
      popupOpenedView: false

    })
  }

  fatchData() {
    Communicators.Fetch()
    .then(responseData => {
      this.setState({
        filteredData: this.formatData(responseData)
      })
    })
  }
  fetchDataAgain() {
    Communicators.Fetch()
    .then(responseData => {
      this.setState({
        popupOpenedAdd: false,
        filteredData: this.formatData(responseData)
      })
    })
  }

  onCardAdd(data) {
    Communicators.Post(data)
    .then(() => this.fetchDataAgain())
  }

  onCardDelete(cardId) {
    Communicators.Delete(cardId)
    .then(() => this.fatchData())
  }

  onCardEdit(cardId) {
    const editAccount = [...this.state.filteredData].find(item => item.id === cardId)
    this.setState({
      popupOpenedAdd: true,
      formData: editAccount
    })
  }

  onCardView(cardId) {
    const viewAccount = [...this.state.filteredData].find(item => item.id === cardId)
    this.setState({
      popupOpenedView: true,
      formData: viewAccount
    })

  }


  onCardEditAdd(data) {
    const updatedData = {
      name: data.name,
      lastName: data.lastName,
      jmbg: data.jmbg,
      city: data.city,
      adress: data.adress,
      postalCode: data.postalCode,
      deposit: data.deposit,
      cCard: data.cCard
    }
    Communicators.Put(data.id , updatedData)
    .then(() => this.fetchDataAgain())
  }

  filterData(searchResults) {
    this.setState({
      filteredData: searchResults
    })
  }

  render() {
    const {data, search, filteredData, popupOpenedAdd, popupOpenedView, formData} = this.state;
    return (

      <Fragment>
        <Header />
        <Cards search

               data={filteredData}

               onDataFilter={searchResults => this.filterData(searchResults)}
               openFormAdd={() => this.onPopupOpenAdd()}
               onCardDelete={cardId => this.onCardDelete(cardId)}
               onCardEdit={cardId => this.onCardEdit(cardId)}
               onCardView={cardId => this.onCardView(cardId)}/>

        {popupOpenedAdd && (
          <Popup popupClose={() => this.onPopupClose()}>
            <FormAdd onFormSubmit={data => this.onCardAdd(data)}
                     onFormEdit={data => this.onCardEditAdd(data)}
                     formData={formData} />
          </Popup>
        )}
        {popupOpenedView && (
          <Popup popupClose={() => this.onPopupClose()}>
            <FormView formData={formData} />
          </Popup>
        )}
        <Button />
        <Footer />
      </Fragment>
    )
  }
}


export default App;
