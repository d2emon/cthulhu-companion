export const mockAPI = (url, mock) => async (query) => {
  console.log('REQ:', url, query);
  return new Promise(resolve => setTimeout(async () => {
    const data = await mock(query);
    const response = { data };
    console.log('RES:', url, response);
    return resolve(response);
  }, 500));
}

const store = (key) => {
  const clone = data => data.map(item => ({...item}));

  const withLocalStore = () => {
    return {
      createAndSave: (data) => {
        const value = localStorage[key];

        if (!value) {
          localStorage[key] = JSON.stringify(data);
        }
      },
      updateAndSave: (data) => {
        localStorage[key] = JSON.stringify(data);
      },
      load: () => {
        const value = localStorage[key];
        return value ? JSON.parse(value) : [];
      },
    }
  };

  const noStore = () => {
    let items = [];

    return {
      createAndSave: (data) => {
        items = clone(data);
      },
      updateAndSave: (data) => {
        items = clone(data);
      },
      load: () => {
        return clone(items);
      },
    }
  };

  return key ? withLocalStore() : noStore();
};

const defaultFilter = () => () => true;

const orders = (field) => ({
  asc: (a, b) => (a[field] && b[field] && a[field] > b[field]) ? 1 : -1,
  desc: (a, b) => (a[field] && b[field] && a[field] < b[field]) ? 1 : -1,
});
const unsorted = () => -1;
const defaultSort = (query) => {
  if (!query) {
    return unsorted;
  }
    
  const {
    order,
    desc,
  } = query;
  
  const ordersGroup = orders(order) || unsorted;  
  
  return ordersGroup
    ? ordersGroup[desc ? 'desc' : 'asc']
    : unsorted;
};

export const createDb = ({
  key,
  data,
  filterQuery = defaultFilter,
  sortQuery = defaultSort,
}) => {
  const dbStorage = store(key);

  dbStorage.createAndSave(data);

  const getItem = (id) => dbStorage
    .load()
    .find(item => item.id === id);

  const getItems = ({
    query,
    order,
  }) => {
    const filterFunction = filterQuery(query);
    const sortFunction = sortQuery(order);

    return dbStorage
      .load()
      .filter(filterFunction)
      .sort(sortFunction);  
  };

  const addItem = (item) => {
    const items = dbStorage.load();

    const id = item.id || `${items.length + 1}`;
    const newItem = {
      id,
      url: `/characters/${id}`,
      ...item,
    };

    dbStorage.updateAndSave([
      ...items,
      newItem,
    ]);

    return {...newItem};
  };

  return {
    addItem,
    getItem,
    getItems,
  };
};
  