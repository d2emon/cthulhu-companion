export const mockAPI = (mock) => (query) => {
  console.log('REQ:', query);
  const data = mock(query);
  console.log('RES:', { data });
  return new Promise(resolve => setTimeout(() => resolve({ data }), 500));
}

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
  data,
  filterQuery = defaultFilter,
  sortQuery = defaultSort,
}) => {
  let items = data.map(item => ({...item}));

  const getItem = (id) => items.find(item => item.id === id);

  const getItems = ({
    query,
    order,
  }) => {
    const filterFunction = filterQuery(query);
    const sortFunction = sortQuery(order);

    return items
      .filter(filterFunction)
      .sort(sortFunction);  
  };

  return {
    getItem,
    getItems,
  };
};
  