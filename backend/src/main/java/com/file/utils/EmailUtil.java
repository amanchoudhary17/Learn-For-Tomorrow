package com.file.utils;

//import javax.mail.MessagingException;

import jakarta.mail.MessagingException;

//import javax.mail.internet.MimeMessage;

 import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
 import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {

  @Autowired
  private JavaMailSender javaMailSender;

  @Value("${spring.mail.username}") 
  private String emailUsername;

  public void sendOtpEmail(String email, String otp) throws MessagingException {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
    mimeMessageHelper.setTo(email);
    mimeMessageHelper.setFrom(emailUsername);
    mimeMessageHelper.setSubject("Account Verification OTP - Town_Treasures");

    String htmlContent = String.format(
      "<html>" +
        "<head></head>" +
        "<body>" +
          "<div class=\"container\">" +
            "<div class=\"content\">" +
              "<p>Welcome to Town Treasures</p>" +
              "<p class=\"otp\"><strong>%s</strong></p>" +
            "</div>" +
          "</div>" +
        "</body>" +
      "</html>", otp
    );

    mimeMessageHelper.setText(htmlContent, true);
    javaMailSender.send(mimeMessage);
  }

  public void sendWelcomeEmail(String email) throws MessagingException {
    MimeMessage mimeMessage = javaMailSender.createMimeMessage();
    MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
    mimeMessageHelper.setTo(email);
    mimeMessageHelper.setFrom(emailUsername);
    mimeMessageHelper.setSubject("Welcome to Learn For Tommarow");

    String htmlContent = 
      "<html>" +
        "<head></head>" +
        "<body>" +
          "<div class=\"container\">" +
            "<div class=\"content\">" +
              "<p>Dear User,</p>" +
              "<p>You have successfully submitted your response to our website,we will response to you soon.</p>" +
            "</div>" +
          "</div>" +
        "</body>" +
      "</html>";

    mimeMessageHelper.setText(htmlContent, true);
    javaMailSender.send(mimeMessage);
  }
}
