package com.sm.samples.warehouse.model;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="items")
public class ItemModel {
  @Id
  private String id;
  private String sku;
  private String name;
  private String description;
  private double price;

  public ItemModel() {
  }

  public ItemModel(String sku, String name, String description, double price) {
    this.sku = sku;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  @Override
  public String toString() {
    return "Item [id=" + id + ", sku=" + sku + ", name=" + name + ", description=" + description + ", price=" + price
        + "]";
  }
}
