## Easyshop
Easily shop for groceries during coronavirus pandmic. we try to create a web app that helps customers shop safely for groceries

https://easyshopindia.herokuapp.com/

https://miro.com/app/board/o9J_kog83XA=/  

https://docs.google.com/document/d/14A5E0IkK1xWO8Cd8_pOOewMHqO49RvZYx4J8LMWMZZ8/edit

https://docs.google.com/spreadsheets/d/12GEjT4T7DFxO5GngETmukfVs-ImZ1GtC2f5oQX6SgKU/edit#gid=0

API Testing Link
https://www.getpostman.com/collections/c6da3b13ae81ffccd11a

## Project Structure
    root - 
        models -
            all the database models/schema
        routes - 
            all the backend routes (ensure not colliding with react-routes)
        helper -
            helpers for backend routes (JWT\others)
        client - 
            (Has React Files)
            public - 
                has public files (index.html n stuff)
            src - 
                (has source files)
                components - 
                    (add react components in this folder)
        .env ( add all the config info in this file )

## Note
    Followed variable naming convention - Camel Case
        e.g hiItsAVariableGetThisPattern
        For .env ( environment constant convention )
            e.g HI_ITS_A_VARIABLE

    "routes" folder will have index.js in which we will import all other route files.
        i.e Basic request flow, server.js -> routes/index.js -> routes/index.js/${respectiveFile}.js

## Status Codes
    400 - Bad Request ( Request has unsatisfied params )
    401 - Unauthorized ( Failed JWT verification )
    403 - Forbidden Access ( no authorization headers)
    503 - MongoDB err


## Note
    Test Email : lol@g.com
    Test Pass : lol1

