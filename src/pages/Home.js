import Contact from "../components/Template/Contact";

function Home() {
    return (
        <body>

        <div class="main">
            

            <div class="content">


                <div class="intro">
                    <div class="name">
                        <p>Hey, I'm</p>
                        <h1>ISAIAH FUJII BRESNIHAN</h1>
                    </div>
                    {/* <img id= "profile" title = "profile photo"  src="../images/IMG_0396edited copy.JPG" alt="Profile Photo"> */}
            

                </div>

                <div class="about-me">
                        {/* <a href="programming.html">
                            <img src="../images/IMG_2057 copy.JPG">
                        </a> */}
                    <div class="programming">
                        <p>
                            I'm a computer programmer with over eight years of programming experience, 
                            including web development, Python, and teaching. I love creating projects 
                            that inspire, connect, and help people. Check out what I do and 
                            if you like what you see I'm available for freelance work. 
                        </p>

                    </div>
                    <div class="running">
                        {/* <a href="running.html">
                            <img src="../images/IMG_1431 copy.JPG">
                        </a> */}
                        <p>
                            I love running on trails, roads, the track, or any other surface. 
                            I love the process of improving and pushing my physical limits. 
                            Follow along my running journey.  
                        </p>

                    </div>
                    <div class="outdoors">
                        {/* <a href="outdoors.html">
                            <img src="../images/IMG_5345 copy.JPG">
                        </a> */}
                        <p>
                            When I'm not running, I love enjoying the outdoors in other ways, 
                            whether cycling, hiking, backpacking, or something else. 
                            I'm passionate about enjoying and protecting the nature and land that we live in 
                            and allowing more people to do the same. 
                            Check out some of the things I've done. 

                        </p>

                    </div>
                    <div class="photography">
                        {/* <a href="photography.html">
                            <img src="../images/IMG_0762 copy.PNG">
                        </a> */}
                        <p>
                            I'm a photographer trying to capture the beautiful world that we live in,
                            the amazing nature, the wonderful people, and the moments big and small. 
                            Take a look at some of the things I've captured in photographs. 

                        </p>

                    </div>
                </div>

                <Contact
                    message='Feel free to connect with me and chat with me about my passions and projects!'
                    include={['instagram', 'facebook', 'linkedin']}
                >
                </Contact>    

            </div>

        </div>
    


     </body>
    )
}

export default Home;