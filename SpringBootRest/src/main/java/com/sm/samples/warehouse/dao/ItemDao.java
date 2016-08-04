package com.sm.samples.warehouse.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sm.samples.warehouse.model.ItemModel;

public interface ItemDao extends MongoRepository<ItemModel, Long> {

}
