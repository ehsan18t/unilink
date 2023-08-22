# University

## ***Register University***

**Brief**


To register the university this api is being used and it sends the data in a Json format.

    Used Api : http://127.0.0.1:8000/api/university/create/
    
**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    

    {
    "name": "Test University 2",
    "domain": "Test",
    "admin": {
        "first_name": "Ehsan",
        "last_name": "Khan",
        "username": "ehsan6",
        "email": "ehsan1t@gmail.com"
        }
    }

## ***Pending University List***



    Used Api : http://127.0.0.1:8000/api/university/pending/
    
**Request Header**

    Content-Type : application/json

## ***Public University List***



    Used Api : http://127.0.0.1:8000/api/university/list/
    
**Request Header**

    Content-Type : application/json    


## ***Approved University List***



    Used Api : http://127.0.0.1:8000/api/university/approved/
    
**Request Header**

    Content-Type : application/json


## ***Approved University***

**Brief** 

A request will be send in a json format and those universities which are approved will be shown

    Used Api : http://127.0.0.1:8000/api/university/approve/

**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    {
    "university_id": "2"
    }

## ***Not Approved University***



    Used Api : http://127.0.0.1:8000/api/university/disapprove/

**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    {
    "university_id": "2"
    }    


## ***Banned University***

**Brief** 

A request will be send in a json format and those universities which are Banned will be shown.

    Used Api : http://127.0.0.1:8000/api/university/ban/

**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    {
    "university_id": "2"
    }


## ***Unbanned University***


    Used Api : http://127.0.0.1:8000/api/university/unban/

**Request Header**

    Content-Type : application/json

 **Body [Raw (json)]**

    {
    "university_id": "2"
    }