package com.sm.samples.warehouse;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

  @Autowired
  private ItemService itemService;

  @RequestMapping("/")
  String hello() {
    return "Hello, warehouse app \r\n";
  }

  @RequestMapping(value = "/item", method = RequestMethod.GET)
  public List<Item> getAllItems() {
    return itemService.getAllItems();
  }

  @RequestMapping(value = "/item", method = RequestMethod.POST, consumes="application/json")
  public long addItem(@RequestBody Item item) {
    return itemService.addItem(item);
  }

}
