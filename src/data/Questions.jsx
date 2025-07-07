export const quizData = {
  // ...existing topics

  python: [
    {
      question: "What is the correct file extension for Python files?",
      options: [".pt", ".pyth", ".py", ".pyt"],
      answer: ".py",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "fun", "define", "def"],
      answer: "def",
    },
    {
      question: "How do you insert comments in Python?",
      options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
      answer: "# comment",
    },
    {
      question: "Which of the following is a Python tuple?",
      options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
      answer: "(1, 2, 3)",
    },
    {
      question: "What will `len('hello')` return?",
      options: ["5", "4", "6", "error"],
      answer: "5",
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "exp", "//"],
      answer: "**",
    },
    {
      question: "Which of the following is a correct `if` statement in Python?",
      options: ["if x = 1", "if x == 1", "if (x => 1)", "if x equals 1"],
      answer: "if x == 1",
    },
    {
      question: "How do you start a for loop in Python?",
      options: ["for x in range(5):", "for x = 0 to 5", "foreach x in range(5)", "loop x 5"],
      answer: "for x in range(5):",
    },
    {
      question: "Which keyword is used to handle exceptions in Python?",
      options: ["catch", "except", "error", "handle"],
      answer: "except",
    },
    {
      question: "What is the output of `bool(0)`?",
      options: ["True", "False", "0", "None"],
      answer: "False",
    },
    {
      question: "Which function is used to get user input in Python?",
      options: ["input()", "read()", "scanf()", "get()"],
      answer: "input()",
    },
    {
      question: "What does the `strip()` method do in Python?",
      options: ["Removes whitespace", "Converts to uppercase", "Splits string", "Replaces characters"],
      answer: "Removes whitespace",
    },
    {
      question: "How do you define a list in Python?",
      options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "<1, 2, 3>"],
      answer: "[1, 2, 3]",
    },
    {
      question: "What is the result of `3 // 2` in Python?",
      options: ["1", "1.5", "2", "0"],
      answer: "1",
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["object", "define", "class", "function"],
      answer: "class",
    },
  ],

  java: [
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["define", "struct", "class", "object"],
      answer: "class",
    },
    {
      question: "Which method is the entry point of a Java program?",
      options: ["main()", "start()", "run()", "init()"],
      answer: "main()",
    },
    {
      question: "What is the default value of a boolean in Java?",
      options: ["true", "false", "null", "0"],
      answer: "false",
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["inherits", "extends", "implements", "derives"],
      answer: "extends",
    },
    {
      question: "Which package contains the `Scanner` class?",
      options: ["java.utils", "java.scan", "java.io", "java.util"],
      answer: "java.util",
    },
    {
      question: "What is used to run Java bytecode?",
      options: ["JRE", "JDK", "JVM", "JAR"],
      answer: "JVM",
    },
    {
      question: "Which access modifier makes a method accessible in the same class only?",
      options: ["public", "protected", "private", "default"],
      answer: "private",
    },
    {
      question: "Which operator is used for string concatenation?",
      options: ["&", "concat", "+", "."],
      answer: "+",
    },
    {
      question: "What is the size of an `int` in Java?",
      options: ["8-bit", "16-bit", "32-bit", "64-bit"],
      answer: "32-bit",
    },
    {
      question: "What is the correct way to create an object in Java?",
      options: ["new ClassName();", "ClassName obj = new ClassName();", "ClassName obj;", "create ClassName();"],
      answer: "ClassName obj = new ClassName();",
    },
    {
      question: "Which statement is used to exit a loop in Java?",
      options: ["break", "exit", "stop", "return"],
      answer: "break",
    },
    {
      question: "What does `static` mean in Java?",
      options: ["Constant", "Shared among instances", "Mutable", "Final"],
      answer: "Shared among instances",
    },
    {
      question: "Which keyword is used to prevent inheritance?",
      options: ["final", "private", "static", "sealed"],
      answer: "final",
    },
    {
      question: "Which interface is used to implement a queue in Java?",
      options: ["List", "Queue", "Map", "Set"],
      answer: "Queue",
    },
    {
      question: "What is the extension of a compiled Java file?",
      options: [".java", ".class", ".exe", ".jar"],
      answer: ".class",
    },
  ],

  reactjs: [
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM kept in memory",
      "The actual browser DOM",
      "A component’s local state",
      "A third-party library",
    ],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    question: "Which hook is used to perform side effects in functional components?",
    options: ["useEffect", "useState", "useRef", "useReducer"],
    answer: "useEffect",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "Java Standard eXpression",
    ],
    answer: "JavaScript XML",
  },
  {
    question: "What is the default value of a `useState` hook?",
    options: ["undefined", "null", "It must be set by the developer", "0"],
    answer: "It must be set by the developer",
  },
  {
    question: "What is a key in React lists?",
    options: [
      "A unique identifier for each element",
      "A prop passed to components",
      "A special variable used in JSX",
      "A reference to DOM nodes",
    ],
    answer: "A unique identifier for each element",
  },
  {
    question: "Which method is used to pass data from parent to child components?",
    options: ["Props", "State", "Context", "Events"],
    answer: "Props",
  },
  {
    question: "Which hook is used to manage local component state?",
    options: ["useState", "useContext", "useReducer", "useRef"],
    answer: "useState",
  },
  {
    question: "How many parent elements can a React component return?",
    options: ["One", "Two", "Any number", "Zero"],
    answer: "One",
  },
  {
    question: "What is the use of `useRef` in React?",
    options: [
      "To store a reference to a DOM node",
      "To persist values across renders",
      "To trigger re-renders",
      "To store props",
    ],
    answer: "To store a reference to a DOM node",
  },
  {
    question: "What is the purpose of `React.memo()`?",
    options: [
      "To prevent unnecessary re-renders",
      "To create a memoized version of useState",
      "To memoize DOM elements",
      "To memoize CSS classes",
    ],
    answer: "To prevent unnecessary re-renders",
  },
  {
    question: "What is a controlled component in React?",
    options: [
      "A component with its own state",
      "A component controlled by Redux",
      "A form element controlled by React state",
      "A child component with props",
    ],
    answer: "A form element controlled by React state",
  },
  {
    question: "Which lifecycle method is replaced by `useEffect()`?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "componentDidUpdate",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What does lifting state up mean in React?",
    options: [
      "Moving state to a common ancestor component",
      "Passing props from child to parent",
      "Using context to share state",
      "Sharing state across routes",
    ],
    answer: "Moving state to a common ancestor component",
  },
  {
    question: "What is the context API used for?",
    options: [
      "Managing global state",
      "Fetching data",
      "Routing between pages",
      "Styling components",
    ],
    answer: "Managing global state",
  },
  {
    question: "Which library is commonly used for routing in React apps?",
    options: ["React Router", "React Navigation", "Redux", "Axios"],
    answer: "React Router",
  },
],

angular: [
  {
    question: "What is Angular primarily used for?",
    options: ["Game development", "Mobile OS", "Web applications", "Operating Systems"],
    answer: "Web applications",
  },
  {
    question: "Which language is primarily used to write Angular applications?",
    options: ["Java", "TypeScript", "Python", "Ruby"],
    answer: "TypeScript",
  },
  {
    question: "What command is used to create a new Angular project?",
    options: ["ng new", "npm init", "ng start", "angular create"],
    answer: "ng new",
  },
  {
    question: "Which file contains the root module of an Angular app?",
    options: ["main.ts", "app.component.ts", "app.module.ts", "index.html"],
    answer: "app.module.ts",
  },
  {
    question: "What are decorators in Angular?",
    options: [
      "CSS classes",
      "Functions that modify classes",
      "HTML tags",
      "Built-in Angular animations",
    ],
    answer: "Functions that modify classes",
  },
  {
    question: "Which directive is used for conditional rendering?",
    options: ["*ngIf", "*ngFor", "*ngShow", "*ngSwitch"],
    answer: "*ngIf",
  },
  {
    question: "Which directive is used to loop over items?",
    options: ["*ngFor", "*ngLoop", "*ngRepeat", "*ngEach"],
    answer: "*ngFor",
  },
  {
    question: "What is a service in Angular?",
    options: [
      "A function to handle HTTP",
      "A reusable class to share logic or data",
      "A CSS module",
      "A routing mechanism",
    ],
    answer: "A reusable class to share logic or data",
  },
  {
    question: "What is Angular CLI used for?",
    options: [
      "Building Angular components manually",
      "Automating Angular workflows",
      "Styling Angular pages",
      "Connecting Angular with databases",
    ],
    answer: "Automating Angular workflows",
  },
  {
    question: "Which Angular lifecycle hook is called once after the component is mounted?",
    options: ["ngOnDestroy", "ngInit", "ngOnInit", "ngLoad"],
    answer: "ngOnInit",
  },
  {
    question: "How do you bind data from a component to the template?",
    options: ["@Binding", "[data]", "{{data}}", "#data"],
    answer: "{{data}}",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["@Input", "@Output", "@Child", "@Inject"],
    answer: "@Input",
  },
  {
    question: "Which operator is commonly used with Observables in Angular?",
    options: ["map", "pipe", "subscribe", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What module is needed for HTTP requests in Angular?",
    options: ["HttpModule", "HttpClientModule", "NgHttpModule", "RequestModule"],
    answer: "HttpClientModule",
  },
  {
    question: "What is routing used for in Angular?",
    options: [
      "Handling user authentication",
      "Sending HTTP requests",
      "Navigation between views/components",
      "Modifying component styles",
    ],
    answer: "Navigation between views/components",
  },
],

mongodb: [
  {
    question: "What type of database is MongoDB?",
    options: ["Relational", "Document-oriented", "Graph-based", "Key-Value"],
    answer: "Document-oriented",
  },
  {
    question: "Which format does MongoDB use to store data?",
    options: ["XML", "CSV", "BSON", "YAML"],
    answer: "BSON",
  },
  {
    question: "What is the default port number for MongoDB?",
    options: ["27017", "3306", "5432", "8080"],
    answer: "27017",
  },
  {
    question: "Which command is used to view all databases in MongoDB shell?",
    options: ["SHOW DATABASES", "db.show()", "show dbs", "list databases"],
    answer: "show dbs",
  },
  {
    question: "What does a document in MongoDB resemble?",
    options: ["A row in SQL", "A file in filesystem", "A table in SQL", "A JSON array"],
    answer: "A row in SQL",
  },
  {
    question: "Which command inserts one document into a collection?",
    options: ["insertOne()", "add()", "put()", "create()"],
    answer: "insertOne()",
  },
  {
    question: "What is a MongoDB collection?",
    options: [
      "A group of databases",
      "A group of documents",
      "A field in a document",
      "A single record",
    ],
    answer: "A group of documents",
  },
  {
    question: "How are records uniquely identified in MongoDB?",
    options: ["_id", "primary_key", "unique_id", "mongo_id"],
    answer: "_id",
  },
  {
    question: "Which method is used to update documents?",
    options: ["update()", "updateOne()", "modify()", "set()"],
    answer: "updateOne()",
  },
  {
    question: "What does `db.collection.find()` return?",
    options: ["Only one document", "All documents", "Metadata", "Nothing"],
    answer: "All documents",
  },
  {
    question: "What does the `$set` operator do?",
    options: [
      "Removes a document",
      "Creates a new collection",
      "Updates specific fields",
      "Filters results",
    ],
    answer: "Updates specific fields",
  },
  {
    question: "Which of these is a valid query operator in MongoDB?",
    options: ["$eq", "$if", "$cond", "$notEqual"],
    answer: "$eq",
  },
  {
    question: "What does MongoDB use for indexing?",
    options: ["Binary Trees", "Hash Tables", "B-Trees", "Linked Lists"],
    answer: "B-Trees",
  },
  {
    question: "What is the use of MongoDB Atlas?",
    options: [
      "A desktop GUI for MongoDB",
      "A managed cloud database service",
      "An analytics tool",
      "A backup service",
    ],
    answer: "A managed cloud database service",
  },
  {
    question: "How do you delete a document in MongoDB?",
    options: ["delete()", "remove()", "deleteOne()", "drop()"],
    answer: "deleteOne()",
  },
],

springboot: [
  {
    question: "What is Spring Boot primarily used for?",
    options: [
      "Creating mobile applications",
      "Building stand-alone Java applications",
      "Styling web pages",
      "Managing cloud infrastructure",
    ],
    answer: "Building stand-alone Java applications",
  },
  {
    question: "Which annotation is used to mark a Spring Boot application entry point?",
    options: ["@SpringBootApplication", "@EnableBoot", "@MainApp", "@Configuration"],
    answer: "@SpringBootApplication",
  },
  {
    question: "What does the `@RestController` annotation do?",
    options: [
      "Creates a traditional MVC controller",
      "Marks a class as a RESTful controller",
      "Disables routing",
      "Creates a service class",
    ],
    answer: "Marks a class as a RESTful controller",
  },
  {
    question: "Which tool is often used to build Spring Boot applications?",
    options: ["Gradle", "Maven", "Ant", "Webpack"],
    answer: "Maven",
  },
  {
    question: "How do you define application properties in Spring Boot?",
    options: [
      "application.txt",
      "application.config",
      "application.properties",
      "spring-boot.properties",
    ],
    answer: "application.properties",
  },
  {
    question: "What is the default embedded server in Spring Boot?",
    options: ["Tomcat", "Jetty", "WildFly", "GlassFish"],
    answer: "Tomcat",
  },
  {
    question: "Which annotation is used for dependency injection in Spring Boot?",
    options: ["@Autowired", "@Inject", "@Resource", "@Import"],
    answer: "@Autowired",
  },
  {
    question: "Which starter is used for building web applications in Spring Boot?",
    options: [
      "spring-boot-starter-web",
      "spring-boot-web-starter",
      "web-starter-boot",
      "spring-web-boot",
    ],
    answer: "spring-boot-starter-web",
  },
  {
    question: "How do you enable scheduling in Spring Boot?",
    options: ["@EnableScheduling", "@EnableTasks", "@Schedule", "@RunTask"],
    answer: "@EnableScheduling",
  },
  {
    question: "Which annotation is used to map HTTP GET requests?",
    options: ["@GetMapping", "@RequestMapping(GET)", "@MapGET", "@HttpGet"],
    answer: "@GetMapping",
  },
  {
    question: "Which file is used to override default port in Spring Boot?",
    options: ["pom.xml", "application.properties", "server.xml", "config.json"],
    answer: "application.properties",
  },
  {
    question: "What does `spring-boot-devtools` provide?",
    options: [
      "Unit testing features",
      "Hot reloading and dev support",
      "Database migrations",
      "Security filters",
    ],
    answer: "Hot reloading and dev support",
  },
  {
    question: "How can you create a REST API in Spring Boot?",
    options: ["Using @RestController", "Using @ApiRoute", "Using @RouteMap", "Using @WebApi"],
    answer: "Using @RestController",
  },
  {
    question: "What is the purpose of `@SpringBootTest`?",
    options: [
      "To run integration tests",
      "To enable configuration files",
      "To create services",
      "To scan entities",
    ],
    answer: "To run integration tests",
  },
  {
    question: "What does `@RequestParam` do in a controller method?",
    options: [
      "Maps path variable",
      "Binds a query parameter",
      "Injects a service",
      "Parses JSON body",
    ],
    answer: "Binds a query parameter",
  },
],

nodejs: [
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Styling web pages",
      "Handling database queries only",
      "Running JavaScript on the server",
      "Building mobile apps",
    ],
    answer: "Running JavaScript on the server",
  },
  {
    question: "Which module is used to create a server in Node.js?",
    options: ["http", "fs", "url", "net"],
    answer: "http",
  },
  {
    question: "What is `npm`?",
    options: [
      "Node Programming Module",
      "Node Private Manager",
      "Node Package Manager",
      "New Project Manager",
    ],
    answer: "Node Package Manager",
  },
  {
    question: "Which method is used to read files in Node.js?",
    options: ["read()", "fs.read()", "fs.readFile()", "openFile()"],
    answer: "fs.readFile()",
  },
  {
    question: "Which keyword is used to handle asynchronous code in Node.js?",
    options: ["async", "defer", "await", "both async and await"],
    answer: "both async and await",
  },
  {
    question: "What is the default file name for a Node.js entry point?",
    options: ["server.js", "index.html", "main.js", "index.js"],
    answer: "index.js",
  },
  {
    question: "Which object is used to manage environment variables?",
    options: ["process.env", "system.env", "global.env", "env.process"],
    answer: "process.env",
  },
  {
    question: "What does `require()` do in Node.js?",
    options: [
      "Defines a new module",
      "Installs packages",
      "Loads a module",
      "Creates a server",
    ],
    answer: "Loads a module",
  },
  {
    question: "Which module is used to work with file paths?",
    options: ["path", "fs", "url", "stream"],
    answer: "path",
  },
  {
    question: "What is a callback function?",
    options: [
      "A function that calls itself",
      "A function passed into another function as an argument",
      "A built-in function in Node.js",
      "A synchronous function",
    ],
    answer: "A function passed into another function as an argument",
  },
  {
    question: "What does `eventEmitter.emit()` do?",
    options: [
      "Registers a new event",
      "Deletes an event",
      "Triggers an event",
      "Binds data to an event",
    ],
    answer: "Triggers an event",
  },
  {
    question: "Which command is used to initialize a new Node.js project?",
    options: ["npm init", "node create", "npm start", "node init"],
    answer: "npm init",
  },
  {
    question: "What is the use of `res.end()` in a Node.js server?",
    options: [
      "Closes the database connection",
      "Ends the response and sends it",
      "Stops the server",
      "Restarts the request",
    ],
    answer: "Ends the response and sends it",
  },
  {
    question: "Which module is used to create readable and writable streams?",
    options: ["stream", "path", "buffer", "url"],
    answer: "stream",
  },
  {
    question: "What is the purpose of `process.exit()`?",
    options: [
      "To restart the Node app",
      "To log memory usage",
      "To stop the Node process",
      "To trigger garbage collection",
    ],
    answer: "To stop the Node process",
  },
],

expressjs: [
  {
    question: "What is Express.js?",
    options: [
      "A front-end JavaScript library",
      "A database engine",
      "A web framework for Node.js",
      "A CSS framework",
    ],
    answer: "A web framework for Node.js",
  },
  {
    question: "Which command installs Express.js using npm?",
    options: ["npm install express", "npm get express", "npm update express", "npm fetch express"],
    answer: "npm install express",
  },
  {
    question: "What is the default HTTP method used in forms?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "GET",
  },
  {
    question: "Which method is used to handle GET requests in Express?",
    options: ["app.post()", "app.get()", "app.put()", "app.fetch()"],
    answer: "app.get()",
  },
  {
    question: "What does `req.params` contain in Express?",
    options: [
      "Query string parameters",
      "POST request data",
      "Route parameters",
      "Header information",
    ],
    answer: "Route parameters",
  },
  {
    question: "Which middleware is used to parse JSON request bodies?",
    options: [
      "express.static()",
      "express.urlencoded()",
      "express.json()",
      "bodyParser.raw()",
    ],
    answer: "express.json()",
  },
  {
    question: "How do you define a middleware function in Express?",
    options: [
      "function middleware(req, res, next) { ... }",
      "function middleware(res, req) { ... }",
      "function middleware() { ... }",
      "function middleware(next, req, res) { ... }",
    ],
    answer: "function middleware(req, res, next) { ... }",
  },
  {
    question: "What is the use of `next()` in middleware?",
    options: [
      "Sends the response",
      "Exits the app",
      "Skips the current route",
      "Passes control to the next middleware",
    ],
    answer: "Passes control to the next middleware",
  },
  {
    question: "Which object contains the URL query parameters?",
    options: ["req.query", "req.body", "req.params", "req.url"],
    answer: "req.query",
  },
  {
    question: "What is the purpose of `express.static()`?",
    options: [
      "To handle POST requests",
      "To set up templating engines",
      "To serve static files",
      "To parse JSON data",
    ],
    answer: "To serve static files",
  },
  {
    question: "How do you start an Express server on port 3000?",
    options: [
      "app.run(3000)",
      "app.listen(3000)",
      "express.listen(3000)",
      "server.start(3000)",
    ],
    answer: "app.listen(3000)",
  },
  {
    question: "Which object holds data sent in a POST request?",
    options: ["req.query", "req.params", "req.body", "req.header"],
    answer: "req.body",
  },
  {
    question: "Which status code represents 'Not Found'?",
    options: ["200", "302", "404", "500"],
    answer: "404",
  },
  {
    question: "What does `res.send()` do?",
    options: [
      "Receives data from the client",
      "Renders a template",
      "Sends a response to the client",
      "Redirects to another page",
    ],
    answer: "Sends a response to the client",
  },
  {
    question: "What is `app.use()` used for?",
    options: [
      "Defining routes",
      "Handling static files only",
      "Mounting middleware functions",
      "Starting the server",
    ],
    answer: "Mounting middleware functions",
  },
],

django: [
  {
    question: "What is Django?",
    options: [
      "A JavaScript framework",
      "A Python web framework",
      "A database system",
      "A CSS library",
    ],
    answer: "A Python web framework",
  },
  {
    question: "What design pattern does Django follow?",
    options: ["MVC", "MVVM", "MVT", "MVP"],
    answer: "MVT",
  },
  {
    question: "Which command starts a new Django project?",
    options: [
      "django-admin startapp",
      "python manage.py newproject",
      "django-admin startproject",
      "django startproject",
    ],
    answer: "django-admin startproject",
  },
  {
    question: "Where do you define Django models?",
    options: ["views.py", "admin.py", "models.py", "forms.py"],
    answer: "models.py",
  },
  {
    question: "Which file contains project settings like database config?",
    options: ["urls.py", "settings.py", "apps.py", "admin.py"],
    answer: "settings.py",
  },
  {
    question: "Which database is used by default in Django?",
    options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"],
    answer: "SQLite",
  },
  {
    question: "What is the purpose of `migrations` in Django?",
    options: [
      "To manage database changes",
      "To move static files",
      "To cache views",
      "To deploy projects",
    ],
    answer: "To manage database changes",
  },
  {
    question: "How do you create a new Django app?",
    options: [
      "django-admin createapp",
      "python manage.py startapp",
      "django startapp",
      "python startapp",
    ],
    answer: "python manage.py startapp",
  },
  {
    question: "What does `manage.py runserver` do?",
    options: [
      "Creates a database",
      "Starts a development server",
      "Deploys to production",
      "Installs dependencies",
    ],
    answer: "Starts a development server",
  },
  {
    question: "Which command applies changes to the database?",
    options: [
      "python manage.py migrate",
      "python manage.py runserver",
      "python manage.py makemigrations",
      "python manage.py dbupdate",
    ],
    answer: "python manage.py migrate",
  },
  {
    question: "What is the purpose of `admin.py` in Django?",
    options: [
      "Defines model logic",
      "Registers models to the admin site",
      "Creates forms",
      "Defines routes",
    ],
    answer: "Registers models to the admin site",
  },
  {
    question: "Which file defines URL routes in Django apps?",
    options: ["routes.py", "views.py", "urls.py", "config.py"],
    answer: "urls.py",
  },
  {
    question: "What is a Django template?",
    options: [
      "A Python function",
      "An HTML file with placeholders",
      "A JavaScript snippet",
      "A database migration file",
    ],
    answer: "An HTML file with placeholders",
  },
  {
    question: "What is the default port Django runs on?",
    options: ["3000", "5000", "8000", "8080"],
    answer: "8000",
  },
  {
    question: "Which function is used to return an HTTP response in Django views?",
    options: ["render()", "respond()", "return()", "redirect()"],
    answer: "render()",
  },
],

mysql: [
  {
    question: "What type of database is MySQL?",
    options: [
      "NoSQL",
      "Graph-based",
      "Relational",
      "Document-oriented",
    ],
    answer: "Relational",
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["GET", "FETCH", "SELECT", "READ"],
    answer: "SELECT",
  },
  {
    question: "What is the default port for MySQL?",
    options: ["5432", "1521", "3306", "8080"],
    answer: "3306",
  },
  {
    question: "Which constraint ensures uniqueness in a column?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "UNIQUE", "NOT NULL"],
    answer: "UNIQUE",
  },
  {
    question: "Which clause is used to filter records in a SELECT query?",
    options: ["WHERE", "IF", "HAVING", "FILTER"],
    answer: "WHERE",
  },
  {
    question: "Which command is used to remove a table in MySQL?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
    answer: "DROP TABLE",
  },
  {
    question: "What does the `JOIN` operation do in SQL?",
    options: [
      "Combines rows from two or more tables",
      "Deletes duplicate rows",
      "Changes column names",
      "Splits data into partitions",
    ],
    answer: "Combines rows from two or more tables",
  },
  {
    question: "Which type of JOIN returns all rows from both tables, matching where possible?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: "FULL OUTER JOIN",
  },
  {
    question: "What is the purpose of the `GROUP BY` clause?",
    options: [
      "Groups rows with the same values",
      "Sorts the result set",
      "Deletes duplicate rows",
      "Limits the result set",
    ],
    answer: "Groups rows with the same values",
  },
  {
    question: "Which command adds a new row to a table?",
    options: ["INSERT", "ADD", "APPEND", "UPDATE"],
    answer: "INSERT",
  },
  {
    question: "Which statement modifies existing records in a table?",
    options: ["SET", "EDIT", "MODIFY", "UPDATE"],
    answer: "UPDATE",
  },
  {
    question: "Which SQL function returns the total number of rows?",
    options: ["SUM()", "COUNT()", "TOTAL()", "LENGTH()"],
    answer: "COUNT()",
  },
  {
    question: "What is a foreign key in MySQL?",
    options: [
      "A unique value in a table",
      "A field that links to the primary key of another table",
      "A temporary field",
      "An automatically generated number",
    ],
    answer: "A field that links to the primary key of another table",
  },
  {
    question: "Which data type is used to store large amounts of text in MySQL?",
    options: ["VARCHAR", "TEXT", "CHAR", "STRING"],
    answer: "TEXT",
  },
  {
    question: "How do you sort query results in descending order?",
    options: [
      "ORDER BY column DESC",
      "SORT BY column DOWN",
      "SORT DESC column",
      "ORDER DESC column",
    ],
    answer: "ORDER BY column DESC",
  },
],
postgresql: [
  {
    question: "PostgreSQL is best described as a:",
    options: ["Relational DBMS", "NoSQL DB", "Graph Database", "File System"],
    answer: "Relational DBMS",
  },
  {
    question: "Which SQL command is used to change data in a table?",
    options: ["MODIFY", "SET", "UPDATE", "ALTER"],
    answer: "UPDATE",
  },
  {
    question: "What is the default port for PostgreSQL?",
    options: ["3306", "5432", "1521", "1433"],
    answer: "5432",
  },
  {
    question: "Which keyword creates a new database in PostgreSQL?",
    options: ["CREATE DATABASE", "NEW DATABASE", "MAKE DATABASE", "ADD DATABASE"],
    answer: "CREATE DATABASE",
  },
  {
    question: "Which PostgreSQL data type is used to store JSON data?",
    options: ["TEXT", "VARCHAR", "JSON", "BLOB"],
    answer: "JSON",
  },
  {
    question: "Which command is used to give a user privileges?",
    options: ["GRANT", "ALLOW", "PERMIT", "ENABLE"],
    answer: "GRANT",
  },
  {
    question: "What does the `SERIAL` data type do?",
    options: [
      "Creates an auto-incrementing integer",
      "Stores a string",
      "Generates UUIDs",
      "Creates a timestamp",
    ],
    answer: "Creates an auto-incrementing integer",
  },
  {
    question: "Which function returns the current date in PostgreSQL?",
    options: ["CURRENT_DATE", "GETDATE()", "TODAY()", "NOW()"],
    answer: "CURRENT_DATE",
  },
  {
    question: "Which clause filters group rows in aggregate functions?",
    options: ["WHERE", "HAVING", "GROUP BY", "FILTER"],
    answer: "HAVING",
  },
  {
    question: "What is a CTE in PostgreSQL?",
    options: [
      "Common Table Expression",
      "Column Type Expression",
      "Current Table Element",
      "Computed Table Entity",
    ],
    answer: "Common Table Expression",
  },
  {
    question: "Which command lists all tables in the current database?",
    options: ["\dt", "SHOW TABLES", "LIST TABLES", "SELECT * FROM db.tables"],
    answer: "\\dt",
  },
  {
    question: "Which type of index supports full-text search in PostgreSQL?",
    options: ["GIN", "BTREE", "HASH", "RTREE"],
    answer: "GIN",
  },
  {
    question: "What is the purpose of the `VACUUM` command?",
    options: [
      "Cleans up dead tuples",
      "Backs up the database",
      "Shrinks the database size",
      "Clears the logs",
    ],
    answer: "Cleans up dead tuples",
  },
  {
    question: "Which clause is used to rename a table in PostgreSQL?",
    options: ["ALTER TABLE ... RENAME TO", "MODIFY TABLE", "UPDATE NAME", "CHANGE NAME"],
    answer: "ALTER TABLE ... RENAME TO",
  },
  {
    question: "Which isolation level is the default in PostgreSQL?",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable",
    ],
    answer: "Read Committed",
  },
],

html: [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markdown Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Multi Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which tag is used for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: "<br>",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "What is the correct tag for inserting an image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>",
  },
  {
    question: "Which tag is used to make text bold?",
    options: ["<strong>", "<bold>", "<b>", "<strong>"],
    answer: "<b>",
  },
  {
    question: "Where is the correct place to insert a `<title>` tag?",
    options: ["Inside `<head>`", "Inside `<body>`", "Before `<html>`", "After `<footer>`"],
    answer: "Inside `<head>`",
  },
  {
    question: "What does the `<a>` tag define in HTML?",
    options: ["A link", "An anchor point", "A header", "A button"],
    answer: "A link",
  },
  {
    question: "Which attribute is used with `<img>` to display alternate text?",
    options: ["title", "alt", "name", "desc"],
    answer: "alt",
  },
  {
    question: "Which input type is used for selecting a file in a form?",
    options: ["text", "upload", "file", "document"],
    answer: "file",
  },
  {
    question: "How can you open a link in a new tab?",
    options: [
      'Add target="_blank"',
      'Add newtab="true"',
      'Set rel="external"',
      'Use target="tab"',
    ],
    answer: 'Add target="_blank"',
  },
  {
    question: "What is the purpose of the `<meta>` tag in HTML?",
    options: [
      "Display metadata",
      "Store internal CSS",
      "Include scripts",
      "Provide information to browsers and search engines",
    ],
    answer: "Provide information to browsers and search engines",
  },
  {
    question: "Which tag is used to group elements in HTML?",
    options: ["<div>", "<span>", "<section>", "<group>"],
    answer: "<div>",
  },
  {
    question: "Which tag is used for adding a table row?",
    options: ["<tr>", "<td>", "<row>", "<table-row>"],
    answer: "<tr>",
  },
  {
    question: "Which tag defines the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<h0>"],
    answer: "<h1>",
  },
  {
    question: "Which attribute is used to define inline styles?",
    options: ["css", "style", "styles", "design"],
    answer: "style",
  },
],

css: [
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Syntax",
      "Colorful Style Settings",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "text-style"],
    answer: "color",
  },
  {
    question: "What is the correct CSS syntax to select all `<p>` elements?",
    options: ["p {}", "#p {}", ".p {}", "<p> {}"],
    answer: "p {}",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size",
  },
  {
    question: "How do you add a background color in CSS?",
    options: [
      "bg-color: red;",
      "background-color: red;",
      "color-background: red;",
      "background: color red;",
    ],
    answer: "background-color: red;",
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: ["font-style", "text-style", "font-weight", "style"],
    answer: "font-style",
  },
  {
    question: "How do you make a list not display bullet points?",
    options: [
      "list-type: none;",
      "list-style-type: none;",
      "list-decoration: none;",
      "bullet: none;",
    ],
    answer: "list-style-type: none;",
  },
  {
    question: "What does `z-index` control?",
    options: [
      "Zoom level",
      "Positioning of background images",
      "Stacking order of elements",
      "Flexbox direction",
    ],
    answer: "Stacking order of elements",
  },
  {
    question: "Which unit is relative to the parent element’s font size?",
    options: ["em", "px", "%", "vh"],
    answer: "em",
  },
  {
    question: "How do you select an element with the id 'main'?",
    options: ["#main", ".main", "main", "*main"],
    answer: "#main",
  },
  {
    question: "Which property sets the space between lines of text?",
    options: ["letter-spacing", "line-height", "spacing", "text-indent"],
    answer: "line-height",
  },
  {
    question: "What does the `display: flex;` property do?",
    options: [
      "Applies floating to elements",
      "Enables 3D transformation",
      "Creates a flexible box layout",
      "Wraps text inside a div",
    ],
    answer: "Creates a flexible box layout",
  },
  {
    question: "How do you apply a style to all `<h1>` and `<h2>` elements?",
    options: ["h1, h2 {}", "h1 + h2 {}", "h1 h2 {}", "h1 & h2 {}"],
    answer: "h1, h2 {}",
  },
  {
    question: "Which shorthand property sets margin values?",
    options: ["padding", "space", "box", "margin"],
    answer: "margin",
  },
  {
    question: "What is the default position value in CSS?",
    options: ["fixed", "relative", "absolute", "static"],
    answer: "static",
  },
],

javascriptes6: [
  {
    question: "Which keyword is used to declare a constant in ES6?",
    options: ["let", "var", "const", "define"],
    answer: "const",
  },
  {
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    answer: "object",
  },
  {
    question: "What does the `=>` symbol represent in ES6?",
    options: ["Callback function", "Arrow function", "Promise resolver", "Spread operator"],
    answer: "Arrow function",
  },
  {
    question: "Which method converts a JSON string to an object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toObject()"],
    answer: "JSON.parse()",
  },
  {
    question: "How do you create a promise in JavaScript?",
    options: ["new Promise()", "Promise()", "make.Promise()", "startPromise()"],
    answer: "new Promise()",
  },
  {
    question: "Which keyword is used to define a class in ES6?",
    options: ["object", "define", "class", "struct"],
    answer: "class",
  },
  {
    question: "What is the purpose of the `...` operator in ES6?",
    options: ["Bitwise operation", "Spread/rest operator", "Reference binding", "Concatenation"],
    answer: "Spread/rest operator",
  },
  {
    question: "Which method is used to filter elements in an array?",
    options: ["map()", "forEach()", "filter()", "reduce()"],
    answer: "filter()",
  },
  {
    question: "What does `let` do differently than `var`?",
    options: [
      "It declares global variables",
      "It hoists variables",
      "It limits scope to block-level",
      "It creates constants",
    ],
    answer: "It limits scope to block-level",
  },
  {
    question: "What is the result of `NaN === NaN`?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
  },
  {
    question: "How can you make a copy of an array in ES6?",
    options: ["array.clone()", "array.copy()", "[...array]", "copy(array)"],
    answer: "[...array]",
  },
  {
    question: "What is the purpose of `async` keyword?",
    options: [
      "To pause execution",
      "To wait for timeouts",
      "To write asynchronous code using promises",
      "To call APIs faster",
    ],
    answer: "To write asynchronous code using promises",
  },
  {
    question: "Which method is used to combine all elements of an array into a single value?",
    options: ["reduce()", "join()", "concat()", "map()"],
    answer: "reduce()",
  },
  {
    question: "Which loop is best for iterating over object properties?",
    options: ["for", "forEach", "for...in", "while"],
    answer: "for...in",
  },
  {
    question: "What does `Array.isArray([])` return?",
    options: ["false", "true", "undefined", "error"],
    answer: "true",
  },
],


typescript: [
  {
    question: "What is TypeScript?",
    options: [
      "A programming language that compiles to Java",
      "A superset of JavaScript that adds static types",
      "A browser extension",
      "A server-side scripting language",
    ],
    answer: "A superset of JavaScript that adds static types",
  },
  {
    question: "Which file extension is used for TypeScript files?",
    options: [".js", ".ts", ".tsx", ".typ"],
    answer: ".ts",
  },
  {
    question: "Which keyword is used to define a variable with a specific type?",
    options: ["def", "type", "let", "let with type annotation"],
    answer: "let with type annotation",
  },
  {
    question: "How do you specify a variable as a string in TypeScript?",
    options: ["let x = string;", "let x: string;", "string x;", "x := string;"],
    answer: "let x: string;",
  },
  {
    question: "What will `let x: number = '5';` result in?",
    options: ["Type inference", "Compile-time error", "Runtime error", "Nothing"],
    answer: "Compile-time error",
  },
  {
    question: "What is the use of interfaces in TypeScript?",
    options: [
      "To define object shapes",
      "To format HTML",
      "To store functions only",
      "To manage async code",
    ],
    answer: "To define object shapes",
  },
  {
    question: "Which keyword is used to create a custom type?",
    options: ["type", "interface", "structure", "define"],
    answer: "type",
  },
  {
    question: "How do you define a function parameter to be optional?",
    options: ["Using `...param`", "Using `param?`", "Using `optional param`", "You can't"],
    answer: "Using `param?`",
  },
  {
    question: "What does `readonly` do in TypeScript?",
    options: [
      "Makes the file read-only",
      "Prevents variable reassignment",
      "Makes object properties immutable",
      "Freezes an object",
    ],
    answer: "Makes object properties immutable",
  },
  {
    question: "How do you enable strict type checking in TypeScript?",
    options: ["Add `use strict`", "Set `strict: true` in tsconfig.json", "Enable it in VSCode", "Use `--strict` flag"],
    answer: "Set `strict: true` in tsconfig.json",
  },
  {
    question: "Which utility type makes all properties of a type optional?",
    options: ["Readonly<T>", "Partial<T>", "Record<T>", "Optional<T>"],
    answer: "Partial<T>",
  },
  {
    question: "What does the `never` type represent?",
    options: ["An empty object", "A function that never returns", "Any value", "Unknown type"],
    answer: "A function that never returns",
  },
  {
    question: "What is the difference between `any` and `unknown`?",
    options: [
      "`any` skips type checking, `unknown` requires type checking",
      "Both are the same",
      "`unknown` is deprecated",
      "`any` is safer than `unknown`",
    ],
    answer: "`any` skips type checking, `unknown` requires type checking",
  },
  {
    question: "What is the result of compiling TypeScript?",
    options: ["JavaScript", "Java", "C#", "TypeScript code"],
    answer: "JavaScript",
  },
  {
    question: "Which command is used to compile a TypeScript file?",
    options: ["ts-run", "ts-node", "tsc", "npm compile"],
    answer: "tsc",
  },
],


gitgithub: [
  {
    question: "What is Git?",
    options: [
      "A programming language",
      "A version control system",
      "A build tool",
      "A database",
    ],
    answer: "A version control system",
  },
  {
    question: "What is GitHub?",
    options: [
      "A local Git repository",
      "A code editor",
      "A cloud-based Git repository hosting service",
      "A programming language",
    ],
    answer: "A cloud-based Git repository hosting service",
  },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git new", "git create"],
    answer: "git init",
  },
  {
    question: "Which command stages changes for the next commit?",
    options: ["git stage", "git push", "git add", "git save"],
    answer: "git add",
  },
  {
    question: "Which command is used to view the commit history?",
    options: ["git log", "git history", "git commits", "git list"],
    answer: "git log",
  },
  {
    question: "Which command creates a new branch?",
    options: ["git create branch", "git branch new", "git branch", "git new-branch"],
    answer: "git branch",
  },
  {
    question: "What does `git clone` do?",
    options: [
      "Deletes a repository",
      "Creates a new branch",
      "Downloads a repository from GitHub",
      "Uploads files to GitHub",
    ],
    answer: "Downloads a repository from GitHub",
  },
  {
    question: "Which command uploads local commits to GitHub?",
    options: ["git push", "git upload", "git commit", "git deploy"],
    answer: "git push",
  },
  {
    question: "What is a pull request in GitHub?",
    options: [
      "A request to delete code",
      "A request to pull code from local to remote",
      "A request to merge changes into another branch",
      "A request to clone a repo",
    ],
    answer: "A request to merge changes into another branch",
  },
  {
    question: "What does `git status` show?",
    options: [
      "Your GitHub account details",
      "The number of commits made",
      "The current state of the working directory and staging area",
      "List of contributors",
    ],
    answer: "The current state of the working directory and staging area",
  },
  {
    question: "How do you discard local changes to a tracked file?",
    options: [
      "git delete file",
      "git remove",
      "git reset file",
      "git checkout -- filename",
    ],
    answer: "git checkout -- filename",
  },
  {
    question: "Which file is used to ignore files from being tracked by Git?",
    options: [".gitignore", ".gitconfig", "ignore.txt", "README.md"],
    answer: ".gitignore",
  },
  {
    question: "Which command is used to merge branches?",
    options: ["git join", "git connect", "git merge", "git rebase"],
    answer: "git merge",
  },
  {
    question: "What does `git pull` do?",
    options: [
      "Push changes to the remote repo",
      "Update local repo with changes from remote",
      "Clone a repo",
      "Revert local commits",
    ],
    answer: "Update local repo with changes from remote",
  },
  {
    question: "Which command is used to rename a branch?",
    options: [
      "git branch -m new-name",
      "git rename branch",
      "git switch -n",
      "git move",
    ],
    answer: "git branch -m new-name",
  },
],

};
