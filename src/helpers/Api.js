const Api = {
  getProducts: (limit = 10) => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        const array = [
          {id: 1, title: 'Produto 1'},
          {id: 2, title: 'Produto 2'},
          {id: 3, title: 'Produto 3'}
        ];
        resolve(array);
      }, 1500)
    })
  }
};

export default Api