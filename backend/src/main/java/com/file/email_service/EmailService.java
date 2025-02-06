package com.file.email_service;
import java.io.File;

public interface EmailService {
// sending email to whom :-
	String sendEmail(String to,String subject, String message);
	
	String[] sendEmail(String[] to, String[] cc,String subject ,String message);
	

	
	void sendEmailWithFile(String to, String subject, String message, File file);
}
