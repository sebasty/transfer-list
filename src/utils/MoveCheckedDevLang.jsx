const moveCheckedDevLang = (from, setFrom, to, setTo) => {
    const moveFrom = {...from};
    const moveTo = {...to};
  
    for (let key in moveFrom) {
      if (moveFrom[key] === true) {
        moveTo[key] = false;  
        delete moveFrom[key];
      }
    }
  
    setTo(moveTo); 
    setFrom(moveFrom);
};
  
export default moveCheckedDevLang;
  