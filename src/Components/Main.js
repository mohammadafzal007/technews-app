import React, { createContext, useContext, useReducer, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialstate = {
    search: "General",
    isLoading: true,
    pageSize: 20,
    page: 1,
    articles: [],
    totalResults: 5,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_STORIES":
        return {
          ...state,
          articles: action.payload.articles,
          isLoading: false,
          totalResults: action.payload.totalResults,
        };
      case "IS _LOADING":
        return {
          isLoading: false,
        };

      case "GET_PREV":
        return {
          ...state,
          page: state.page - 1,
        };
      case "GET_NEXT":
        return {
          ...state,
          page: state.page + 1,
        };
      case "ONCHANGE":
        return {
          ...state,
          search: action.payload,
        };
      case "SEARCH_NEWS":
        return {
          ...state,
          search: action.payload,
          page: 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);

  const fetchnews = async (url) => {
    try {
      // const url=;
      const res = await fetch(url);
      const data = await res.json();
      // setArticles(data.articles);
      dispatch({
        type: "GET_STORIES",
        payload: {
          articles: data.articles,
          totalResults: data.totalResults,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrev = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    dispatch({
      type: "GET_PREV",
    });
  };
  const getNext = () => {
    console.log(state.search);
    window.scrollTo({ top: 1, left: 0, behavior: "smooth" });
    dispatch({
      type: "GET_NEXT",
    });
  };
  const onchange = (search_text) => {
    dispatch({
      type: "ONCHANGE",
      payload: search_text,
    });
  };
  function searchNews(searching) {
    dispatch({
      type: "SEARCH_NEWS",
      payload: searching,
    });
  }
  // eslint-disable-next-line
  useEffect(() => {
      fetchnews(
        `https://newsapi.org/v2/everything?q=${state.search}&apiKey=6ea1873d933d479f99b97377422a5ccc&page=${state.page}&pageSize=${state.pageSize}`
      );
  }, [state.search, state.page, state.pageSize]);
  return (
    <AppContext.Provider
      value={{ ...state, onchange, getPrev, getNext, searchNews }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
