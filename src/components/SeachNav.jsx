import React from 'react';

const SeachNav = (props) => {
    return <div className='search-navbar'>
        <nav className="navbar navbar-light bg-light ">
            <div className="container-fluid" >
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for Meal..." aria-label="Username" aria-describedby="basic-addon1" value={props.value} onChange={(e) => props.setValue(e.target.value) }/>
                    <button className="btn btn-outline-success" type="submit" onClick={props.onClick}>Search</button>
                </div>
            </div>
        </nav>
    </div>;
};

export default SeachNav;
