package com.sm.samples.warehouse.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sm.samples.warehouse.model.ItemModel;

@Service
public class ItemService {
  @Autowired
  private ItemDao itemDao;

  public String addItem(ItemModel item) {
    itemDao.save(item);

    return item.getId();
  }

  public List<ItemModel> getAllItems() {
    return itemDao.findAll();
  }
}
