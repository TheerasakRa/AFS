import React from 'react'
import './Circlemenu.css'

function Circlemenu() {
    return (
        <div className="Circlemenu ">
            <nav class="menu  ">
                
                <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
                <label class="menu-open-button" for="menu-open">
                    <span class="lines line-1"></span>
                    <span class="lines line-2"></span>
                    <span class="lines line-3"></span>
                    
                </label>

                <a href="/homepage" 
                    class="menu-item white"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946433.png" 
                    alt="Homepage" width="500" height="600"/> 
                </a>
                <a href="/notes" class="menu-item white "> 
                    <img src="https://cdn-icons-png.flaticon.com/512/3790/3790171.png" 
                    alt="Note Pad" width="400" height="600"/>  
                </a>
                <a href="/search" class="menu-item white"> 
                <img src="https://cdn-icons-png.flaticon.com/512/3442/3442662.png" 
                    alt="Area" width="500" height="600"/>  
                    </a>
                <a href="#" class="menu-item white"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/2099/2099109.png" 
                    alt="Setting" width="500" height="600"/>  
                </a>
                <a href="#" class="menu-item white"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/1827/1827295.png" 
                    alt="Notification" width="500" height="600"/>  
                </a>
                <a href="#" class="menu-item white"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" 
                    alt="Profile" width="500" height="600"/>  
                </a>
            </nav>
        </div>
    );
}

export default Circlemenu;