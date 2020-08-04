package com.example.demo.app.graphql;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.example.demo.app.graphql.domain.Comment;
import com.example.demo.app.graphql.domain.Like;
import com.example.demo.app.graphql.domain.Post;
import com.example.demo.app.graphql.domain.PostRepository;
import com.example.demo.app.graphql.domain.auth.LoginInput;
import com.example.demo.app.graphql.domain.auth.RegisterInput;
import com.example.demo.app.graphql.domain.auth.User;
import com.example.demo.app.graphql.domain.auth.UserRepository;
import graphql.schema.DataFetchingEnvironment;
import graphql.servlet.GraphQLContext;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {

  private final PostRepository postRepository;
  private final UserRepository userRepository;

  public Mutation(PostRepository postRepository, UserRepository userRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }

  public User register(RegisterInput registerInput) {
    if (!registerInput.getPassword().equals(registerInput.getRepeatPassword())) {
      throw new AppException("Password and InvalidPassword are not the same");
    }
    return userRepository.save(new User(registerInput.getUsername(), registerInput.getPassword()));
  }

  public User login(LoginInput loginInput) {
    Optional<User> user = userRepository
        .findByUsernameAndPassword(loginInput.getUsername(), loginInput.getPassword());
    if (user.isEmpty()) {
      throw new AppException("Invalid credentials");
    }
    return user.get();
  }

  public int deletePost(String postId, DataFetchingEnvironment env) {
    String username = validateUser(env);
    postRepository.deleteById(postId);
    return 1; // Graphql doesn't support void types as return?
  }

  public Post createPost(String body, DataFetchingEnvironment env) {
    String username = validateUser(env);
    return postRepository.save(new Post(body, username));
  }

  @Transactional
  public Like likePost(String postId, DataFetchingEnvironment env) {
    String username = validateUser(env);
    Post post = postRepository.findById(postId).orElseThrow(() -> new AppException("Post not found"));
    return post.like(username);
  }

  @Transactional
  public Comment commentPost(String postId, String body, DataFetchingEnvironment env) {
    String username = getFromToken(getTokenFrom(env)).getUsername();
    Post post = postRepository.findById(postId).orElseThrow(() -> new AppException("Post not found"));
    return post.addComment(username, body);
  }

  private String validateUser(DataFetchingEnvironment env) {
    String token = getTokenFrom(env);
    return getFromToken(token).getUsername();
  }

  private User getFromToken(String token) {
    if (token.isEmpty()) {
      throw new AppException("TOKEN IS EMPTY");
    }
    return userRepository.findByToken(token).orElseThrow(() -> new AppException("UNAUTHORIZED"));
  }

  private String getTokenFrom(DataFetchingEnvironment env) {
    GraphQLContext context = env.getContext();
    HttpServletRequest request = context.getHttpServletRequest().get();
    return request.getHeader("Authorization");
  }
}
