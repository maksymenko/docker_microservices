package com.sm.samples.warehouse.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sm.samples.warehouse.model.ItemModel;

@Service
public class ItemService {
  private static final Logger LOG = LoggerFactory.getLogger(ItemService.class);
  
  @Autowired
  private ItemDao itemDao;

  public String addItem(ItemModel item) {
    LOG.debug(">>> adding new Item {}" + item);
    itemDao.save(item);
    LOG.debug(">>> new tem saved {}", item.getId());
    return item.getId();
  }

  public List<ItemModel> getAllItems() {
    LOG.debug(">>> retrieve all items");
    List<ItemModel> items = itemDao.findAll();
    LOG.debug(">>> found {} items", items.size());
    return items;
  }
}
