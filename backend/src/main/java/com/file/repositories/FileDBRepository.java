package com.file.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.file.models.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
