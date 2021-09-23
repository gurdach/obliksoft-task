import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  searchItems: [],
  loading: true,
  term: '',
  isSearch: false,
}

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }

    case actionTypes.SORT_ITEMS:
      return {
        ...state,
        items: [
          ...state.searchItems,
          ...state.items
            // фильтруем прочитанные
            .filter(item => !item.readed)
            // сортируем по дате и времени
            .sort((a, b) => new Date(`${b.date.dmy} ${b.date.time}`) - new Date(`${a.date.dmy} ${a.date.time}`)),
          ...state.items
            // фильтруем не прочитанные
            .filter(item => item.readed)
            // сортируем по дате и времени
            .sort((a, b) => new Date(`${b.date.dmy} ${b.date.time}`) - new Date(`${a.date.dmy} ${a.date.time}`)),
        ]
      }
    case actionTypes.READ_MESSAGE:
      return {
        ...state,
        items: [
          ...state.items.map(item => {
            if (item.id === action.payload) {
              item.readed = true
            }
            return item;
          })
        ],
        loading: false,
      }
    case actionTypes.FIND_ITEM:
      const copyState = [...state.items.slice()]
      return {
        ...state,
        searchItems: [
          ...copyState.filter(item => item.phone.includes(action.payload))
        ],
        loading: false,
        term: action.payload,
        isSearch: true,
      }

    default:
      return state;
  }
}