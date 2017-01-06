package com.sm.samples.warehouse.service;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import com.sm.samples.warehouse.domain.ItemDao;
import com.sm.samples.warehouse.domain.ItemModel;

public class ItemServiceTest {  

  @Mock
  private ItemDao itemDao;

  @InjectMocks
  private ItemService itemService;
  
  @Captor
  private ArgumentCaptor<ItemModel> itemModelCaptor;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void addItem_shoudAddItemSuccessfully() {
    ItemModel item = new ItemModel("sku1", "name", "description", 1.2);
    Mockito.when(itemDao.save(itemModelCaptor.capture())).thenReturn(item);

    itemService.addItem(item);

    ItemModel actualItem = itemModelCaptor.getValue();
    assertThat(actualItem.getSku(), equalTo(item.getSku()));
    assertThat(actualItem.getName(), equalTo(item.getName()));
    assertThat(actualItem.getDescription(), equalTo(item.getDescription()));
    assertThat(actualItem.getPrice(), equalTo(item.getPrice()));
    
  }
}
