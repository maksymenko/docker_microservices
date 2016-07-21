package com.sm.samples.app;

import org.springframework.boot.SpringApplication;

import com.sm.samples.config.SpringConfig;

public class AppRunner {
  public static void main(String[] args) throws Exception {
    SpringApplication.run(SpringConfig.class, args);
  }
}
