# Course

## **Course  List**

**Brief**

This api is used to retrive the course data in a list view

    Used Api : http://127.0.0.1:8000/api/course/

**Request Headers**

    Content-Type : application/json




## **Create  Course**

**Brief**

This api is used to register a particular course in the website

    Used Api : http://127.0.0.1:8000/api/course/create/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "name":"Introduction to Computer",
    "code":"CSE 111",
    "credit": 1,
    "type": 2,
    "department_id": 11
    }

## **Delete  Course**

**Brief**

This api is used to delete a particular course in the website

    Used Api : http://127.0.0.1:8000/api/course/delete/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "course_id": 2
    }   

## **Section Select**

**Brief**

This api is used to assign sections to the students

    Used Api : http://127.0.0.1:8000/api/course/sections/?course_id=3

**Request Headers**

    Content-Type : application/json

**Query Params**

    section_id : 3


## **Get  Select**

**Brief**

This api is used to retrive section data

    Used Api : http://127.0.0.1:8000/api/course/sections/?section_id=4

**Request Headers**

    Content-Type : application/json


**Query Params**

    section_id : 4

## **Create  Secttion**

**Brief**

This api is used to create a section

    Used Api : http://127.0.0.1:8000/api/course/section/create/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "name":"B",
    "trimester": "201",
    "course_id": 3
    }

## **Update  Secttion**

**Brief**

This api is used to update any variables of section

    Used Api : http://127.0.0.1:8000/api/course/section/update/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
        "name":"B",
        "trimester": "202",
        "section_id": 4
    }  

## **Delete  Secttion**

**Brief**

This api is used to delete any section

    Used Api : http://127.0.0.1:8000/api/course/section/delete/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
     
        "section_id": 4
    }      

    