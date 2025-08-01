const Profile = ({ data, setData, errors }) => {
    const { name, age, email } = data;

    const handleDataChange = (e, item) => {
        setData(prevState => ({
            ...prevState,
            [item]: e.target.value
        }))
    };

    return (
        <div>
            <div className="profile-field">
                <label>Name : </label>
                <input type='text' value={name} onChange={(e) => handleDataChange(e, 'name')} />
                {errors.name && <span className="errors">{errors.name}</span>}
            </div>
            <div className="profile-field">
                <label>Age : </label>
                <input type='number' value={age} onChange={(e) => handleDataChange(e, 'age')} />
                {errors.age && <span className="errors">{errors.age}</span>}
            </div>
            <div className="profile-field">
                <label>Email : </label>
                <input type='text' value={email} onChange={(e) => handleDataChange(e, 'email')} />
                {errors.email && <span className="errors">{errors.email}</span>}
            </div>
        </div>
    )
}

export default Profile;