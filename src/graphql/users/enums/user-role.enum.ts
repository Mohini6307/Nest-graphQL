import { registerEnumType } from '@nestjs/graphql';
import { UserRole } from '../../../user/entities/user.entity';

registerEnumType(UserRole, {
  name: 'UserRole',
});

export { UserRole };
