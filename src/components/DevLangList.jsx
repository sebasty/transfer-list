const DevLangList = ({list, setList}) => { 
    return (
        <div className="list">
            {Object.keys(list).map((item) => (
                <div>
                    <input 
                      type='checkbox'
                      id={item} 
                      checked={list[item]}
                      onChange={() => setList({...list, [item] : !list[item]})}
                    />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    )
}

export default DevLangList;