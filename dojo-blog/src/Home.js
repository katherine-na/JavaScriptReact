import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My new web site', body: 'lorem ipsum...', autor: 'Timon', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum...', autor: 'Brandy', id: 2},
        {title: 'My new web site', body: 'lorem ipsum...', autor: 'Mishuga', id: 3},

    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All props"/>
        </div>
     );
}
 
export default Home;