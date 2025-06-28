import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
    const [data, setData] = useState({
        name: 'Siddharth Koundal',
        age: 24,
        email: 'sksiddharth27@gmail.com',
        interests: ['Coding', 'Reading', 'Gaming'],
        settings: 'Dark'
    });
    const [activeTab, setActiveTab] = useState(0);
    const [errors, setErrors] = useState({});

    const tabs = [
        {
            name: 'Profile',
            component: Profile,
            validate: () => {
                const err = {};
                if (!data.name || data.name.length < 2) {
                    err.name = 'Name is not valid';
                }
                if (!data.age || data.age < 18) {
                    err.age = 'Age is not valid';
                }
                if (!data.email || data.email.length < 2) {
                    err.email = 'Email is not valid';
                }
                setErrors(err);
                return Object.keys(err).length === 0;
            }
        },
        {
            name: 'Interests',
            component: Interests,
            validate: () => {
                const err = {};
                if (!data.interests || data.interests.length === 0) {
                    err.interests = 'Select at least one interest';
                }
                setErrors(err);
                return Object.keys(err).length === 0;
            }
        },
        {
            name: 'Settings',
            component: Settings,
            validate: () => {
                const err = {};
                if (!data.settings) {
                    err.settings = 'Select a setting';
                }
                setErrors(err);
                return Object.keys(err).length === 0;
            }
        }
    ];

    const ActiveTab = tabs[activeTab].component;

    const handlePrev = () => {
        setErrors({});
        setActiveTab((prev) => prev - 1);
    }

    const handleNext = () => {
        if (tabs[activeTab].validate()) {
            setErrors({});
            setActiveTab((prev) => prev + 1);
        }
    }

    const handleSubmit = () => {
        if (tabs[activeTab].validate()) {
            setErrors({});
            alert('Form Submitted!');
        }
    }

    return (
        <div>
            <div className="tab-heading-container">
                {tabs.map((tab, index) => (
                    <div key={index} className={`tab-heading${activeTab === index ? " active" : ""}`} onClick={() => setActiveTab(index)}>{tab.name}</div>
                ))}
            </div>
            <div className="tab-body">
                <ActiveTab data={data} setData={setData} errors={errors} />
            </div>
            <div className="tab-button">
                {activeTab > 0 && <button onClick={handlePrev}>Prev</button>}
                {activeTab < tabs.length - 1 && <button onClick={handleNext}>Next</button>}
                {activeTab === tabs.length - 1 && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    )
}

export default TabForm;