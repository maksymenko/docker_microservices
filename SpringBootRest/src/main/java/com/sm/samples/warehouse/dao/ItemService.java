package com.sm.samples.warehouse.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sm.samples.warehouse.model.ItemModel;

@Service
public class ItemService {
  @Autowired
  private ItemDao itemDao;
  
  private long nextId = 1;
  private List<ItemModel> catalog = new ArrayList<>();

  public long addItem(ItemModel item) {
//    item.setId(nextId++);
//    catalog.add(item);
//    
    itemDao.save(item);

    return item.getId();
  }

  public List<ItemModel> getAllItems() {
    return itemDao.findAll();
    //return catalog;
  }
}
