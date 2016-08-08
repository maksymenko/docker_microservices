package com.sm.samples.warehouse.dao;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sm.samples.warehouse.model.ItemModel;

public interface ItemDao extends MongoRepository<ItemModel, BigInteger> {

}
