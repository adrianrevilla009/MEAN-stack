BACKEND
Init package.json
npm init -y
Init server
npm run dev
Stop server
fuser -k 4000/tcp
Install dependencies
npm install

Tool REST CLIENT (Tool for simulating a client and watch responses from server)
Create file with .rest extension
Write requests as ### + GET http://localhost:3100/api/employees HTTP/1.1

MONGODB
Init db
mongod
Kill db (IMPORTANT)
ps aux | grep -i mongo
kill -9 "pid"

FRONTEND
Create project
ng new "project_name"
Create component/service ...
ng g (g,s ..) /component/"component_name"
Run server
ng serve

