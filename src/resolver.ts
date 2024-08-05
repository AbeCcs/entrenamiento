import { Resolver ,Query} from '@nestjs/graphql';

@Resolver()
export class MyResolver {
  // Resolver methods will go here
  @Query(() => String)
  sayHello(): string {
    return 'Hola ....';
  }
}