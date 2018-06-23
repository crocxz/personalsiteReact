import dlog from '../images/work/dlog.png';
import flexnotes from '../images/work/flexnotes.png';
import ripepotatoes from '../images/work/ripepotatoes.jpg';
import teddy from '../images/work/teddyfull.jpg';
import waldo from '../images/work/waldo.png';
import meanhotel from '../images/work/meanhotel.png';
import rackbuddy from '../images/work/rackbuddy.jpg';
import rtsp from '../images/work/rtsp.jpg';
import blockulator from '../images/work/blockulator.jpg';

//todo: noncoding 
// A VR education startup concept that I lead to a final round placement and a 4th place finish at Protohack UBC. We aimed to create an alternative form of education with both the benefits of in-person teaching and online courses.

//A local spring water startup sourcing water from the pristine interior of BC for enjoyment all over the world using sustainable bottling and production processes. I was responsible for market research, interpreting lab reports, information presentation and communication.

//Kikfest, a sneaker convention run during the summer of 2016 where I handled the technical and marketing aspects of the event, which saw 300+ happy attendees and 20 satisfied partners bringing in over $20,000 in sales.

export default [
    {
        name: 'dLog',
        info: 'Blockchain powered invoice matching proof of concept built for Bluzelle Decentralized Database Hackathon.  Problem in the market is that purchasers and sellers have significant overhead in the process of matching orders and invoices, being able to store a "handshake" agreement on the blockchain would rectify this issue.  Proof of concept built in React and MaterialUI.',
        img: dlog,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/dLog",
        demoLink: ""
    },
    {
        name: 'ripepotatoes',
        info: 'Netflix redesign with searching and filtering powered by TheMovieDB api. Learning project focused on exercising some React best practices, i.e. seperation of concerns, css modules. Built with React and Bootstrap.',
        img: ripepotatoes,
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/ripepotatoes",
        demoLink: "http://ripepotatoes.s3-website-us-west-2.amazonaws.com/"
    },
    {
        name: 'Teddy',
        info: 'A local startup aiming to disrupt the ride share and food delivery markets with their innovative approaches and services. I worked with the founders to bring their vision to life prototyping the UI and UX, modelling all core features of the app including the primary rideshare and food delivery functionalities and the app\'s animations, aesthetic, and feel.',
        img: teddy,    
        alt: 'Environmindful',
        codeLink: "",
        demoLink: "https://drive.google.com/drive/u/0/folders/0B3mCAQXC0GbBNTBndllXVE5CbFE"
    },
    {
        name: 'Waldo',
        info: 'Bus trip planner and chat service linked to Translink, GoogleMaps api with user display. Android app built for Intro Software Engineering course, using Java, Android SDK.',
        img: waldo,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/Schoolwork/tree/master/waldo",
        demoLink: ""
    },
    {
        name: 'RTSP Client',
        info: 'RTSP streaming client built to play faulty stream data from a given streaming server and mitigate issues for optimal viewing experience including latency and erratic bitrates. Built in Java for networking course, pair project.',
        img: rtsp,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/Schoolwork/tree/master/CS317%20Project%202",
        demoLink: ""
    },
    {
        name: 'MEAN Stack Hotel',
        info: 'AirBNB clone (Hotel review SPA) with login authentication(JWT) and REST api, with MongoDB(Mongoose), Node, and Express on the back end, and Angularjs + Bootstrap on the front end. Part of Udemy MEAN full-stack dev course.',
        img: meanhotel,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/meanstackhotel",
        demoLink: ""
    },
    {
        name: 'RackBuddy',
        info: 'Bike Rack finder web app allowing finding and saving of bike racks.  Data parsed by ETL process from .gov site to Google App Engine database as JDO.  Built in Java, vanilla CSS/HTML for frontend. Group project for Software Engineering course.',
        img: rackbuddy,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/Schoolwork/tree/master/Rack%20Buddy",
        demoLink: ""
    },
    {
        name: 'Blockulator',
        info: 'Simple calculator with calculation history and material design built in Angular 5. App is responsive, has error catching, uses mathjs for an injection-proof eval(), rounds to 8 decimal places, and is built with angular best practices in mind.  Built in Angular, Angular-Material, Bootstrap.',
        img: blockulator,    
        alt: 'Environmindful',
        codeLink: "https://github.com/crocxz/Blockulator",
        demoLink: "http://bigcalc.s3-website-us-west-2.amazonaws.com/"
    },

];