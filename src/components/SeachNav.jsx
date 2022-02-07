import React from 'react';

const SeachNav = () => {
    return <div className='search-navbar'>
        <nav className="navbar navbar-light bg-light ">
            <form className="container-fluid">
                <div class="input-group">
                    <span className="input-group-text" id="basic-addon1">🔍</span>
                    <input type="text" className="form-control" placeholder="Search for Meal..." aria-label="Username" aria-describedby="basic-addon1" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </form>
        </nav>
    </div>;
};

export default SeachNav;
