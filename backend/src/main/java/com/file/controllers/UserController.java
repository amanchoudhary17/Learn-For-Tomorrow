package com.file.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.file.dtos.ContactUsdto;
import com.file.services.ContactUsService;

import java.util.ArrayList;

@Controller
public class UserController {

  @Autowired
  private ContactUsService contactUsService;

  @PostMapping("/contactUs")
  public ResponseEntity<String> contactUs(@RequestBody ContactUsdto contactUsDto) {
    System.out.println(contactUsDto);
    return new ResponseEntity<>(contactUsService.sendForm(contactUsDto), HttpStatus.OK);
  }

}
