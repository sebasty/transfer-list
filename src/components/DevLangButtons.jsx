const DevLangButtons = ({
    leftSide,
    setLeftSide,
    rightSide,
    setRightSide,
    noSelection,
    moveCheckedDevLang,
}) => {
    const moveAllWithUnchecked = (from, setFrom, to, setTo) => {
        const newTo = {...to};
        const newFrom = {...from};
    
        Object.keys(newFrom).forEach((key) => {
            newTo[key] = false;
        });
    
        setTo(newTo);
        setFrom({});
    };

    return (
        <div className="buttons">
            <button
                className="button"
                disabled={Object.keys(rightSide).length === 0}
                onClick={() => moveAllWithUnchecked(rightSide, setRightSide, leftSide, setLeftSide)}
            >
                {"<<"}
            </button>
            <button
                className="button"
                disabled={noSelection(rightSide)}
                onClick={() => moveCheckedDevLang(rightSide, setRightSide, leftSide, setLeftSide)}
            >
                {"<"}
            </button>
            <button
                className="button"
                disabled={noSelection(leftSide)}
                onClick={() => moveCheckedDevLang(leftSide, setLeftSide, rightSide, setRightSide)}
            >
                {">"}
            </button>
            <button
                className="button"
                disabled={Object.keys(leftSide).length === 0}
                onClick={() => moveAllWithUnchecked(leftSide, setLeftSide, rightSide, setRightSide)}
            >
                {">>"}
            </button>
        </div>
    );
};
  
export default DevLangButtons;
  