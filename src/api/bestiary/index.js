import db from './data';

let items = db.map(item => ({...item}));

const orders = {
  title: {
    asc: (a, b) => (a.title && b.title && a.title > b.title) ? 1 : -1,
    desc: (a, b) => (a.title && b.title && a.title < b.title) ? 1 : -1,
  },
  cr: {
    asc: (a, b) => (a.cr > b.cr) ? 1 : -1,
    desc: (a, b) => (a.cr < b.cr) ? 1 : -1,
  },
};

const mockAPI = (mock) => (query) => {
  console.log('REQ:', query);
  const data = mock(query);
  console.log('RES:', { data });
  return new Promise(resolve => setTimeout(() => resolve({ data }), 500));
}

const getItems = ({
  favourite,
  sources,
  title,
  order,
  desc,  
}) => {
  const ordersGroup = orders[order] || orders.title;  
  const sortFunction = ordersGroup[desc ? 'desc' : 'asc'];
  return items
    .filter((item) => {
      if (favourite && !item.favourite) {
        return false;
      }
  
      if (sources) {
        if (item.source && sources.indexOf(item.source.id) < 0) {
          return false;
        }
      }
  
      if (title && item.title.indexOf(title) < 0) {
        return false;
      }
  
      return true;
    })
    .sort(sortFunction);  
};

const updateItem = (id, values) => {
  items = items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        ...values,
      }
    }
    return item;
  });
};

export const fetchBestiary = mockAPI(({ query }) => getItems(query));

export const setFavourite = mockAPI(({ query, data }) => {
  const {
    id,
    favourite,
  } = data;

  updateItem(id, { favourite });
  return getItems(query);
});
