# React + Vite

# In this application we are going to build jokes generator application

# For user credentials you can type your name and whatever password you like and click on the login button it will navigate to the app route

# my credentials

# username: Narahari

# password: hari@123

# step one:

1. create a project with vite
2. now we install dependencies such as react-router-dom to navigate between the components (login and app) components

# step-2:

1. In main.jsx file we create the browser router in which components to navigate

we are going to import {createBrowserRouter} from 'react-router-dom'

createBrowserRouter is new way to create our routes.

for our application we only need two routes
1.app route to display the jokes
2.login route for validation

we need to create a router

const router = createRouterBrowser([
{
path: '/',
element: <App />
},
{
path: '/login',
element: <Login />
}
])

after creating the router we need to import router provider from "react-router-dom"

Router Provider handles the route navigation in our application

const root = ReactDOM.createRoot('document.getElementById('root')')

root.render(
<React.StrictMode>
<RouterProvider router={router} />
<React.StrictMode>
)

# step-3:

we create a login component
we create a form with username, password fields

for validation we check if username or password is empty we display an error at the bottom of our login button

else if username and password are specified then we navigate to app component with the help of useNavigate hook from react-router-dom

# step-4:

In app component we create the state to maintain the data that returns from jokes api

# const [jokes, setJokes] = useState([])

first we need to initialize our jokes state to empty array

we useEffect hook to fetch the data from the api

# useEffect hook accepts two arguments callback function and dependency array

useEffect(() => {
const fetchJokes = async () => {
const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
const data = await response.json();
setJokes(data.jokes)
}

fetchJokes()
}, [])

After fetching the data it is passes to the jokes state

now we map through the jokes array and displays the joke in the ui
