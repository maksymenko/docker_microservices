package com.sm.samples.warehouse;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ItemService {
  private long nextId = 1;
  private List<Item> catalog = new ArrayList<>();

  public long addItem(Item item) {
    item.setId(nextId++);
    catalog.add(item);
    return item.getId();
  }

  public List<Item> getAllItems() {
    return catalog;
  }
}
