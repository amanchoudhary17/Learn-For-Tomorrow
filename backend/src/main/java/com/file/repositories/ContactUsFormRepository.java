package com.file.repositories;


import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.file.models.ContactUsForm;


@Repository
public interface ContactUsFormRepository extends JpaRepository<ContactUsForm,Integer> {

    Optional<ContactUsForm> findByEmail(String email);
}
