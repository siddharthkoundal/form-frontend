const Interests = ({ data, setData, errors }) => {
    const { interests } = data;

    const handleDataChange = (e) => {
        if (e.target.checked) {
            setData(prevState => ({
                ...prevState,
                interests: [...prevState.interests, e.target.value]
            }));
        }
        else {
            setData(prevState => ({
                ...prevState,
                interests: prevState.interests.filter(i => i !== e.target.value)
            }));
        }
    };

    return (
        <div>
            <div>
                <label>Coding : </label>
                <input type='checkbox' value='Coding' checked={interests.includes('Coding')} onChange={handleDataChange} />
            </div>
            <div>
                <label>Reading : </label>
                <input type='checkbox' value='Reading' checked={interests.includes('Reading')} onChange={handleDataChange} />
            </div>
            <div>
                <label>Gaming : </label>
                <input type='checkbox' value='Gaming' checked={interests.includes('Gaming')} onChange={handleDataChange} />
            </div>
            <div>
                <label>Music : </label>
                <input type='checkbox' value='Music' checked={interests.includes('Music')} onChange={handleDataChange} />
            </div>
            {errors.interests && <span className="errors">{errors.interests}</span>}
        </div>
    )
}

export default Interests;