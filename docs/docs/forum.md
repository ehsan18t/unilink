# Forum

## **Forum  List**



This api is used to get the forums in list manner

    Used Api : http://127.0.0.1:8000/api/forum/forum-list/

**Request Headers**

    Content-Type : application/json



## **Forum Category List**



This api is used to show the forums in a categorized manner.

    Used Api : http://127.0.0.1:8000/api/forum/forum-category-list/

**Request Headers**

    Content-Type : application/json


## **Forum Post List**

This api is used for showing the posts which was done in the forum

    Used Api: http://127.0.0.1:8000/api/forum/forum-post-list/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
    "forum_id": "1"
    } 


## **Forum Post Comment**

This api is used for showing the comments of the posts which was done in the forum

    Used Api: http://127.0.0.1:8000/api/forum/forum-post-comment-list/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
    "post_id": "1"
    }   

## **Forum Post Reaction**

This api is used for showing the reacts( Likes ) of the posts which was done in the forum

    Used Api: http://127.0.0.1:8000/api/forum/forum-post-comment-list/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
    "post_id": "1"
    }   


## **Forum Creation (Admin & Faculty)**

This api is used for creating forums for admin and faculty members

    Used Api: http://127.0.0.1:8000/api/forum/create/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
        "category_id": "1",
        "title": "Test Name Forum",
        "description": "Test Descriptions"
    }

## **Post Creation (All)**

This api is used for creating post for all the existing members

    Used Api: http://127.0.0.1:8000/api/forum/create-post/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
        "forum_id": "1",
        "title": "Test Name Post",
        "content": "Test Descriptions"
    }

## **Create Category (Admin-Faculty)**

This api is used for creating categories for memebers

    Used Api: http://127.0.0.1:8000/api/forum/create-category/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
        "title": "Test Category Name2222",
        "description": "Test Descriptions"
    }   


## **Create Comment (Admin-Student)**


    Used Api: http://127.0.0.1:8000/api/forum/create-post-comment/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
        "post_id": "1",
        "content": "Test Comment 2"
    }   

## **Create Reaction and Post (Admin-Student)**


    Used Api: http://127.0.0.1:8000/api/forum/create-post-like/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

        {
            "post_id": "1"
        }   

## **Approve Forum (Admin)**

This is to approve a new forum in the website


    Used Api: http://127.0.0.1:8000/api/forum/approve/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

        {
        "forum_id": "2"
    }

## **Approve Forum (Admin)**

This is to approve a new categopry  in the website


    Used Api: http://127.0.0.1:8000/api/forum/approve-category/

**Request Headers**

    Content-Type : application/json

**Bodyraw (json)**

    {
        "category_id": "2"
    }





