package com.example.demo.app.graphql;

import graphql.schema.Coercing;
import graphql.schema.CoercingParseLiteralException;
import graphql.schema.CoercingParseValueException;
import graphql.schema.CoercingSerializeException;
import graphql.schema.GraphQLScalarType;
import java.time.LocalDateTime;
import org.springframework.stereotype.Component;

@Component
public class GraphQlLocalDateTime extends GraphQLScalarType {

  public GraphQlLocalDateTime() {
    super("LocalDateTime", "LocalDateTime type", new Coercing<LocalDateTime, String>() {
      @Override
      public String serialize(Object o) throws CoercingSerializeException {
        return ((LocalDateTime) o).toString();
      }

      @Override
      public LocalDateTime parseValue(Object o) throws CoercingParseValueException {
        return LocalDateTime.parse((String) o);
      }

      @Override
      public LocalDateTime parseLiteral(Object o) throws CoercingParseLiteralException {
        return LocalDateTime.parse((String) o);
      }
    });
  }
}
