# BE Heroku URL
    https://dev-shop-24-api.herokuapp.com/

# Models
```
    const Developer_Template = {
        first_name: 'John',
        last_name: 'Smith',
        email: 'dev@email.com',
        password: 'passwordString',
        phone: '555-555-5555',
        title: 'Full Stack Developer',
        location: 'US',
        tech_stack: 'html,css,javascript',
        interest: 'coding,coffee,testing',
        rate: 15.0,
        available: true
    }

    const Client_Template = {
        first_name: 'Jane',
        last_name: 'Johnson',
        email: 'client@email.com',
        password: 'passwordString',
        phone: '555-555-5555',
        company: 'DevShop24'
    }

    const Project_Template = {
        title: 'Awesome App',
        budget: '$5,000',
        deadline: '12/12/12',
        type: 'Web',
        description: 'An awesome web app'
    }

    const Team_Template = {
        client_id: 1,
        project_id: 2,
        frontend_id: 2,
        backend_id: 2,
        ui_id: 3,
        devops_id: 4
    }
```

# Authentication and Registration

## Registration:
### Register New Developer
- URL = https://dev-shop-24-api.herokuapp.com/api/devs/register
- Notes: A successful registration does NOT return a JWT. The user must still login to generate JWT. 
- Accepted Shape:
```
{
  first_name: 'John',
  last_name: 'Smith',
  email: 'dev@email.com',
  password: 'passwordString',
  phone: '555-555-5555',
  title: 'Full Stack Developer',
  location: 'US',
  tech_stack: 'html,css,javascript',
  interest: 'coding,coffee,testing',
  rate: 15.0,
  available: true
}
```

### Register New Client
- URL = https://dev-shop-24-api.herokuapp.com/api/clients/register
- Notes: A successful registration does NOT return a JWT. The user must still login to generate JWT. 
- Accepted Shape:
```
{
  first_name: 'Jane',
  last_name: 'Johnson',
  email: 'client@email.com',
  password: 'passwordString',
  phone: '555-555-5555',
  company: 'DevShop24'
}
```

## Login:
### Developer Login
- URL = https://dev-shop-24-api.herokuapp.com/api/devs/login
- Notes: This will return a JWT which will be used through the app to authenticate the developer. 
- Accepted Shape:
```
{
  email: 'dev@email.com',
  password: 'passwordString',
}
```

### Client Login
- URL = https://dev-shop-24-api.herokuapp.com/api/clients/login
- Notes: This will return a JWT which will be used through the app to authenticate the developer. 
- Accepted Shape:
```
{
  email: 'client@email.com',
  password: 'passwordString',
}
```

# Routes

## Developer Routes:

#### URL https://dev-shop-24-api.herokuapp.com/api/devs

### GET
- NOTES: Returns All Developers In Table As An Array

#### URL https://dev-shop-24-api.herokuapp.com/api/devs/{ID}

### GET
- NOTES: Returns The Developer That Matches The Passed ID An Object

### PUT
- NOTES: Updates Developer Information In Database, Returns Updated Data

- Accepted Shapes (Must Contain at Least 1 Key ):

```
Example 1:

{
  first_name: 'Bob',
  last_name: 'Smith',
  email: 'dev@email.com',
  password: 'passwordString',
  phone: '555-555-5555',
  title: 'Full Stack Developer',
  location: 'US',
  tech_stack: 'html,css,javascript',
  interest: 'coding,coffee,testing',
  rate: 15.0,
  available: true
}

Example 2:

{
  first_name: 'Bob',
}
```

### DELETE
- NOTES: Returns A Message On Successful Removal Of Developer From Database

## Client Routes:

#### URL https://dev-shop-24-api.herokuapp.com/api/clients

### GET
- NOTES: Returns All Clients In Table As An Array

#### URL https://dev-shop-24-api.herokuapp.com/api/clients/{ID}

### GET
- NOTES: Returns The Client That Matches The Passed ID An Object

### PUT
- NOTES: Updates Client Information In Database, Returns Updated Data

- Accepted Shapes (Must Contain at Least 1 Key ):

```
Example 1:

{
  first_name: 'Jane',
  last_name: 'Johnson',
  email: 'client@email.com',
  password: 'passwordString',
  phone: '555-555-5555',
  company: 'DevShop24'
}

Example 2:

{
  first_name: 'Anna',
}
```

### DELETE
- NOTES: Returns A Message On Successful Removal Of Client From Database

## Projects Routes:

#### URL https://dev-shop-24-api.herokuapp.com/api/projects

### GET
- NOTES: Returns All Projects In Table As An Array

#### URL https://dev-shop-24-api.herokuapp.com/api/projects/{ID}

### GET
- NOTES: Returns The Project That Matches The Passed ID An Object

### POST
- NOTES: Adds New Project To Database, Returns Project With ID

- Accepted Shape:

```
{
  title: 'Awesome App',
  budget: '$5,000',
  deadline: '12/12/12',
  type: 'Web',
  description: 'An awesome web app'
}
```

### PUT
- NOTES: Updates Project Information In Database, Returns Updated Data

- Accepted Shapes (Must Contain at Least 1 Key ):

```
Example 1:

{
  title: 'Even Better App',
  budget: '$5,000',
  deadline: '12/12/12',
  type: 'Web',
  description: 'An awesome web app'
}

Example 2:

{
  title: 'Even Better App',
}
```

### DELETE
- NOTES: Returns A Message On Successful Removal Of Project From Database

## Teams Routes:

#### URL https://dev-shop-24-api.herokuapp.com/api/teams

### GET
- NOTES: Returns All Teams In Table As An Array Of Objects With Names and IDs For Project, Client, and Developers

#### URL https://dev-shop-24-api.herokuapp.com/api/teams/{ID}

### GET
- NOTES: Returns The Team That Matches The Passed ID An Object With Names and IDs For Project, Client, and Developers

### POST
- NOTES: Adds New Team To Database, Returns Team With IDs

- Accepted Shape:

```
{
  client_id: 1,
  project_id: 2,
  frontend_id: 2,
  backend_id: 2,
  ui_id: 3,
  devops_id: 4
}
```

### PUT
- NOTES: Updates Team IDs In Database, Returns Updated Data

- Accepted Shapes (Must Contain at Least 1 Key ):

```
Example 1:

{
  client_id: 1,
  project_id: 2,
  frontend_id: 3,
  backend_id: 2,
  ui_id: 3,
  devops_id: 4
}

Example 2:

{
  frontend_id: 3,
}
```

### DELETE
- NOTES: Returns A Message On Successful Removal Of Team From Database
