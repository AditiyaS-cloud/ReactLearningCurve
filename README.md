# ReactLearningCurve

1.	What is Emmet? 

It is essential toolkit for web-developers.
Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow

2.	Difference between a Library and Framework? 

Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways. There isn’t anything magic about frameworks or library. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.  JQuery =>library, Vue.js =>framework.

3.	What is CDN? Why do we use it? 

A CDN, or content delivery network, is a network or collection of servers in locations all over the world. Also known as a content distribution network, a CDN can refer to many types of content delivery services, such as load balancing and video streaming.

A CDN’s network of servers allows companies to deliver content from their websites and mobile applications to people more quickly and efficiently, based on their geographic location. In short, a CDN moves data and applications closer to the end user — increasing speed, enhancing security, and improving the user experience. There are many benefits of a content delivery network, from improved user experience to increased security to lower costs. Benefits 
Reduced page load time.
Improved availability.
Increased scalability.
Increased security.

Both React and ReactDOM are available over a CDN
This is Core ReactJs - 
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

This is for creating and modifying React DOM.
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


4.	Why is React known as React?
5.	What is crossorigin in script tag?

The crossorigin attribute is a CORS settings attribute. It controls, for scripts that are obtained from other origins, whether error information will be exposed. The crossorigin attribute is a CORS settings attribute. Its purpose is to allow images from third-party sites that allow cross-origin access to be used with canvas.

6.	What is difference between React and ReactDOM? 
       To be more concise, react is for the components and react-dom is for rendering the components in the DOM. 'react-dom' acts as a glue between components and DOM. You will be using render() method of the react-dom to render components in the DOM and that's all you have to know when you are starting off with it.

7.	What is difference between react.development.js and react.production.js files via CDN? 
       The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often time hot reloading ability in those builds. The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

8.	What is async and defer? 
      Async - means execute code when it is downloaded and do not block DOM construction during      downloading process.
 Defer - means execute code after its downloaded and browser finished DOM construction and rendering process.
