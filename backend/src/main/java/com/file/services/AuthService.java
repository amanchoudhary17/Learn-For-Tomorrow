package com.file.services;

import com.file.dtos.LoginDTO;
import com.file.dtos.UserDTO;
import com.file.models.User;

public interface AuthService {
    Boolean createUser(UserDTO userDTO);
    User authenticateUser(LoginDTO loginDto);
}
