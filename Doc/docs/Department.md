# Department

## **Register Department**

**Brief**

This api is used to register a particular deperenment in our database

    Used Api : http://127.0.0.1:8000/api/department/create/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "name": "Computer Science Engineering 2",
    "code": "CSE"
    }

## **Public  Department List**

**Brief**

This api is used to showcase the departments in a viewing format.

    Used Api : http://127.0.0.1:8000/api/department/public/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "university_id": 1
    }  


## **Public  Department (View Permission : Admin)**

**Brief**

This api is used to showcase the departments in a viewing format only for the Admin

    Used Api : http://127.0.0.1:8000/api/department/list/

**Request Headers**

    Content-Type : application/json


## **Delete  Department**

**Brief**

This api is used to delete department.

    Used Api : http://127.0.0.1:8000/api/department/delete/

**Request Headers**

    Content-Type : application/json


**Body [Raw (json)]**   

    {
    "department_id": 1
    }
