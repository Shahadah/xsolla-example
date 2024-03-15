
```bash
docker-compose -f docker/docker-compose.yml down
docker kill $(docker ps -q)
docker-compose -f docker/docker-compose.yml up --build
```

Enter docker container
```bash
docker exec -it xsolla_zero_game bash
```