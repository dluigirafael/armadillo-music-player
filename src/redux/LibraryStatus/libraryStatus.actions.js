export const switchLibraryStatus = (status) => {
  return {
    type: "SWITCH_LIBRARY_STATUS",
    payload: status,
  };
};
