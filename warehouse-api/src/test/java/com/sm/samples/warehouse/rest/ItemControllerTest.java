package com.sm.samples.warehouse.rest;

import java.util.Arrays;
import java.util.List;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockServletContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.sm.samples.warehouse.domain.ItemDao;
import com.sm.samples.warehouse.domain.ItemModel;
import com.sm.samples.warehouse.rest.ItemController;
import com.sm.samples.warehouse.service.ItemService;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = MockServletContext.class)
public class ItemControllerTest {
  private static final Logger logger = LoggerFactory.getLogger(ItemControllerTest.class);
  private MockMvc mvc;

  @Mock
  private ItemDao itemDao;

  @Spy
  @InjectMocks
  private ItemService itemService;

  @InjectMocks
  private ItemController itemController;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
    mvc = MockMvcBuilders.standaloneSetup(itemController).build();
  }

  @Test
  public void hello_happyPath() throws Exception {
    mvc.perform(MockMvcRequestBuilders.get("/").accept(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.content().string(Matchers.equalTo("Hello, warehouse app \r\n")));
  }

  @Test
  public void getAllItems_happyPath() throws Exception {
    List<ItemModel> items = Arrays.asList(newItem("1"), newItem("2"));
    Mockito.when(itemDao.findAll()).thenReturn(items);

    MvcResult result = mvc.perform(MockMvcRequestBuilders.get("/item").accept(MediaType.APPLICATION_JSON)).andReturn();
    logger.debug(">>> resp: {}", result.getResponse().getContentAsString());

    mvc.perform(MockMvcRequestBuilders.get("/item").accept(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.status().isOk())
        .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].sku", Matchers.is("1")))
        .andExpect(MockMvcResultMatchers.jsonPath("$[1].sku", Matchers.is("2")));
  }

  private ItemModel newItem(String sku) {
    return new ItemModel(sku, "name", "description", 12.3);
  }
}
