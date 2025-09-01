# User API Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "khannedy",
  "password": "rahasia",
  "name": "Eko Khannedy"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

Response Body Failed :

```json
{
  "errors": "Username already registered"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "khannedy",
  "password": "rahasia"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy",
    "token": "session_id_generated"
  }
}
```

Response Body Failed :

```json
{
  "errors": "Username or password is wrong"
}
```

## Get User

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

Response Body Failed :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Headers :

- Authorization = token

Request Body :

```json
{
  "password": "rahasia", //optional
  "name": "Eko Khannedy" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "khannedy",
    "name": "Eko Khannedy"
  }
}
```

Response Body Failed :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint : POST /api/users

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": true
}
```

Response Body Failed :

```json
{
  "errors": "Username already registered"
}
```
