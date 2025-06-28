const Settings = ({ data, setData }) => {
    const { settings } = data;

    const handleDataChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            settings: e.target.value
        }))
    };

    return (
        <div>
            <div>
                <label>Light : </label>
                <input
                    type='radio'
                    name='settings'
                    value='Light'
                    checked={settings === 'Light'}
                    onChange={handleDataChange}
                />
            </div>
            <div>
                <label>Dark : </label>
                <input
                    type='radio'
                    name='settings'
                    value='Dark'
                    checked={settings === 'Dark'}
                    onChange={handleDataChange}
                />
            </div>
        </div>
    )
}

export default Settings;