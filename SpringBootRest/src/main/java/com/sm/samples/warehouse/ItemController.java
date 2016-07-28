package com.sm.samples.warehouse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

  @RequestMapping("/")
  String hello() {
    return "Hello, warehouse app \r\n";
  }
}
