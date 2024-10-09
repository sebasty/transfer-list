const noSelection = (list) => {
    for (let key in list) {
        if (list[key] === true) {
            return false;
        }
    }
    return true;
};

export default noSelection;
  