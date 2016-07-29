package com.sm.samples.warehouse;

public class Item {
  private long id;
  private String sku;
  private String name;
  private String description;
  private double price;

  public long getId() {
    return id;
  }

  public void setId(long id) {
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
