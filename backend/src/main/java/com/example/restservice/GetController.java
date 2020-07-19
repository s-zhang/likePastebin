package com.example.restservice;


import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GetController {

    private static final String template = "Here's your message, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/save")
    public Save save(@RequestParam(value = "message", defaultValue = "Something to paste") String content) {
        return new Save(counter.incrementAndGet(), String.format(template, content));
    }
}

