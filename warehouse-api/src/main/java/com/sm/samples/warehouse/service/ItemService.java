package com.sm.samples.warehouse.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Stopwatch;
import com.sm.samples.warehouse.model.ItemModel;

@Service
public class ItemService {
  private static final Logger logger = LoggerFactory.getLogger(ItemService.class);
  
  @Autowired
  private ItemDao itemDao;

  public String addItem(ItemModel item) {
    Stopwatch stopwatch = Stopwatch.createStarted();
    logger.debug(">>> adding new Item {}" + item);
    itemDao.save(item);
    logger.debug(">>> new tem saved {} in {}", item.getId(), stopwatch.toString());
    return item.getId();
  }

  public List<ItemModel> getAllItems() {
    Stopwatch stopwatch = Stopwatch.createStarted();
    logger.debug(">>> retrieve all items");
    List<ItemModel> items = itemDao.findAll();
    logger.debug(">>> found {} items in {}", items.size(), stopwatch.toString());
    return items;
  }
}
