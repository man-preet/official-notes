import '/Users/apple/Documents/notes-app/src/Home.css';
import Navbar from '/Users/apple/Documents/notes-app/src/Navbar.jsx';
const Home=()=>{
    return(
        <div className="Home">
            <div className="grid-container">
                <div className="grid-item1"><Navbar/></div>
                <div className="grid-item2">
                    <div className='sidebar-container'>
                        <ul className='sidebar-list'>

                            <li><h4>App Boards</h4></li>
                            <div>
                                
                            <pre> <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" className='userImage'/><b>Enter Name</b><br/>
                               Enter Work</pre>
                            
                            </div>
                           
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Billing</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Updates</a></li>
                            <li><a href="#">Boards</a></li>
                        </ul>
                    </div>
                </div>
                <div className="grid-item3">Main-content</div>
                <div className="grid-item4">right-sidebar</div>
                <div className="grid-item5">footer</div>

            </div>
        </div>
    );
}
export default Home;