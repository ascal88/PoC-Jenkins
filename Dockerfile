FROM frolvlad/alpine-java
MAINTAINER Pasquale Gigliello
ADD demo-0.0.1-SNAPSHOT.jar demo.jar
RUN apk --update add git tar bash
RUN sh -c 'touch /demo.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/demo.jar"]

