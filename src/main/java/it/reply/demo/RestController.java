package it.reply.demo;

import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping(value = "/hostname")
    public String hello() {
        return  System.getenv("HOSTNAME");
    }
}