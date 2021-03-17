## Google translate api for free with tor proxy on Docker
While you are using API methods, your IP will be automatically refreshed every 30 seconds from the tor network.

### Quickstart
http://localhost:8080/source/target/text

```
docker-compose up 
```
Visit [http://localhost:8080/en/ru/Hello world!](http://localhost:8080/en/ru/Hello%20world!)

Results:
```
{"successText":"Привет, мир!"}
```
