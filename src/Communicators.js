


class Communicators  {

  static baseURL = 'https://react-bank-app-2f53f.firebaseio.com/account';

  static Fetch = () => {
    return fetch(Communicators.baseURL + '.json') // kod firebase mora .json
           .then(response => response.json())
  }

  static Post = (data) => {
    return fetch(Communicators.baseURL + '.json', {
          method: 'POST',
          body: JSON.stringify(data)
    })
  }

  static Delete = (cardId) => {
    return fetch(`${Communicators.baseURL}/${cardId}.json`, {
          method: 'DELETE'
    })
  }

  static Put = (cardId, data) => {
    return fetch(`${Communicators.baseURL}/${cardId}.json`, {
          method: 'PUT',
          body: JSON.stringify(data)
    })
  }
}

export {Communicators};
