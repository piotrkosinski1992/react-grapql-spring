package com.example.demo.app.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.example.demo.app.graphql.domain.Post;
import com.example.demo.app.graphql.domain.PostRepository;
import com.example.demo.app.graphql.domain.auth.User;
import com.example.demo.app.graphql.domain.auth.UserRepository;
import java.util.List;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {

  private final PostRepository postRepository;
  private final UserRepository userRepository;

  public Query(PostRepository postRepository, UserRepository userRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }

  public List<Post> getPosts() {
    return postRepository.findAll();
  }

  public User getUserByToken(String token) {
    return userRepository.findByToken(token).orElseThrow(() -> new AppException("Invalid token"));
  }
}
