package com.sm.samples.warehouse.domain;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemDao extends MongoRepository<ItemModel, BigInteger> {

}
