package com.sm.samples.warehouse.domain;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemDao extends MongoRepository<ItemModel, BigInteger> {

}
