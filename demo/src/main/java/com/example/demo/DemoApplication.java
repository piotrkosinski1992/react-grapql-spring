package com.example.demo;

import com.example.demo.app.graphql.domain.Comment;
import com.example.demo.app.graphql.domain.Like;
import com.example.demo.app.graphql.domain.Post;
import com.example.demo.app.graphql.domain.PostRepository;
import com.example.demo.app.graphql.domain.auth.User;
import com.example.demo.app.graphql.domain.auth.UserRepository;
import java.util.Set;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

  private final PostRepository postRepository;
  private final UserRepository userRepository;

  public DemoApplication(PostRepository postRepository, UserRepository userRepository) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
  }


  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @Override
  public void run(String... args) {
    userRepository.save(new User("Piotrek1992", "password"));

    postRepository.save(
        new Post("Body body body", "Rolada1992",
            Set.of(new Like("Rolada1992")),
            Set.of(new Comment("Rolada1992", "haha lol xd"))));

    postRepository.save(
        new Post("Body body body2", "Ada1992",
            Set.of(new Like("Ada1992")),
            Set.of(new Comment("Ada1992", "haha lol xd22"))));
  }
}
