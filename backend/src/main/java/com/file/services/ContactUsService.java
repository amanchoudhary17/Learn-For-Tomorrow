package com.file.services;

import jakarta.*;

// import com.example.registerapp.dto.ContactUsDto;
// import com.example.registerapp.entity.ContactUsForm;
//import com.example.registerapp.repository.ContactUsFormRepository;
// import com.example.registerapp.util.EmailUtil;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.file.utils.EmailUtil;
import com.file.dtos.ContactUsdto;
import com.file.models.ContactUsForm;
import com.file.repositories.ContactUsFormRepository;

@Service
public class ContactUsService {

    private final ContactUsFormRepository contactUsFormRepository;

    @Autowired
    public ContactUsService(ContactUsFormRepository contactUsFormRepository) {
        this.contactUsFormRepository = contactUsFormRepository;
    }

    @Autowired
    private EmailUtil emailUtil;

    public String sendForm(ContactUsdto contactUsDto) {
        System.out.println(contactUsDto);

        ContactUsForm form = new ContactUsForm();
        form.setName(contactUsDto.getName());
        form.setEmail(contactUsDto.getEmail());
        form.setMessage(contactUsDto.getMessage());
        form.setPhoneNo(contactUsDto.getPhoneNo());

        contactUsFormRepository.save(form);

        try {
            // emailUtil.sendOtpEmail("spamsignin889@gmail.com",
            //         "You have a new user complaint </br >" + "<h4>" + contactUsDto.getName() + "</h4></br>"
            //                 + contactUsDto.getEmail() + "</br>" + contactUsDto.getPhoneNo() + "</br>"
            //                 + contactUsDto.getMessage());
            emailUtil.sendWelcomeEmail(contactUsDto.getEmail());
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }

        // ContactUsForm form = new ContactUsForm();
        // form.setName(contactUsDto.getName());
        // form.setEmail(contactUsDto.getEmail());
        // form.setMessage(contactUsDto.getMessage());
        // form.setPhoneNo(contactUsDto.getPhoneNo());

        // contactUsFormRepository.save(form);
        return "Form submission successful";
    }

    public void sendWelcomeEmail(String email) {
        try {
            emailUtil.sendWelcomeEmail(email);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send welcome email");
        }

    }
}
