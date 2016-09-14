package com.sm.samples.warehouse.service;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.sm.samples.warehouse.app.SpringConfig;
import com.sm.samples.warehouse.domain.ItemDao;
import com.sm.samples.warehouse.domain.ItemModel;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={SpringConfig.class})
public class ItemServiceTest {

  @Mock
  private ItemDao itemDao;

  @InjectMocks
  @Autowired
  private ItemService itemService;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void addItem_shoudAddItemSuccessfully() {
    ItemModel item =new ItemModel("sku1", "name", "description", 1.2);
    Mockito.when(itemDao.save(Mockito.any(ItemModel.class))).thenReturn(item);

    itemService.addItem(item);
  }
}
