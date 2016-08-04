package com.sm.samples.warehouse.app;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@EnableAutoConfiguration
@EnableMongoRepositories(basePackages="com.sm.samples.warehouse.dao")
@ComponentScan("com.sm.samples.warehouse")
public class SpringConfig {

}
