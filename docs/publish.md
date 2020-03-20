Build `$docker build -t itetechmadacr.azurecr.io/nux .`
Run `$docker run -p 8080:80 itetechmadacr.azurecr.io/nux`
Open `http://localhost:8080`
Push `$docker push itetechmadacr.azurecr.io/nux:latest`

Publish first time:    
`kubectl apply -f deployment.yml`
`kubectl apply -f service.yml`
`kubectl apply -f ingress.yml`

Publish latest:
`kubectl delete -f deployment.yml`
`kubectl apply -f deployment.yml`
