package com.sm.samples.rest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {

  @RequestMapping("/")
  String hello() {
    return "Hello Sample App!!";
  }
}
