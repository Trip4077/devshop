# BE Heroku URL
    https://dev-shop-24-api.herokuapp.com/

# Models
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



# DB Interaction

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
<!-- 
## User Login
- URL = http://luncher-lambda-buildweek.herokuapp.com/login 

- NOTES: This will return a JWT which will be used through the app to authenticate the user 

- Accepted Shape:
```
{
    email: "Bill@Billy.com",
    password: "TacoMan"
}
```

## Individual User Routes
- URL = http://luncher-lambda-buildweek.herokuapp.com/users/{id}
- Notes: MUST have JWT passed as Authentication header to access ALL `/users/{id}` routes

## School Routes
- URL = http://luncher-lambda-buildweek.herokuapp.com/schools
- Notes: MUST have a JWT passed as Authentication header to access ALL `/schools` routes

### Post New School
- Accepted Shape:
```
{
    name: "The New School",
    address: "111 School St, Atlantis, 55555",
    funds_required: 2500,
    admin_id: 3,
    funds_donated: 100 **
}

```


 -->

