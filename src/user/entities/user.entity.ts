import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum LeadStatus {
  NEW = 'new',
  CONTACTED = 'contacted',
  QUALIFIED = 'qualified',
  PROPOSAL_SENT = 'proposal_sent',
  NEGOTIATION = 'negotiation',
  WON = 'won',
  LOST = 'lost',
}

export enum CustomerType {
  LEAD = 'lead',
  PROSPECT = 'prospect',
  CUSTOMER = 'customer',
  PARTNER = 'partner',
}

export enum PreferredContactMethod {
  EMAIL = 'email',
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
  SMS = 'sms',
}

export enum UserRole {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  MANAGER = 'manager',
  SALES = 'sales',
  SUPPORT = 'support',
  USER = 'user',
}

export enum AccessScope {
  ALL = 'all',
  TEAM = 'team',
  OWNED = 'owned',
  SELF = 'self',
}

export enum AccountStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DISABLED = 'disabled',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Index()
  @Column({ nullable: true, length: 20 })
  phone?: string;

  @Column({ nullable: true, length: 5 })
  countryCode?: string;

  @Column({ nullable: true, length: 20 })
  alternatePhone?: string;

  @Index()
  @Column({ nullable: true })
  company?: string;

  @Column({ nullable: true })
  jobTitle?: string;

  @Column({ nullable: true })
  department?: string;

  @Index()
  @Column({
    type: 'enum',
    enum: LeadStatus,
    default: LeadStatus.NEW,
  })
  leadStatus: LeadStatus;

  @Column({ nullable: true })
  leadSource?: string;

  @Index()
  @Column({
    type: 'enum',
    enum: CustomerType,
    default: CustomerType.LEAD,
  })
  customerType: CustomerType;

  @Column({
    type: 'enum',
    enum: PreferredContactMethod,
    default: PreferredContactMethod.EMAIL,
  })
  preferredContactMethod: PreferredContactMethod;

  @Column({ nullable: true })
  ownerName?: string;

  @Index()
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: AccessScope,
    default: AccessScope.SELF,
  })
  accessScope: AccessScope;

  @Column('simple-array', { nullable: true })
  permissions?: string[];

  @Index()
  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.PENDING,
  })
  accountStatus: AccountStatus;

  @Column({ default: true })
  canLogin: boolean;

  @Column({ type: 'timestamp', nullable: true })
  lastPasswordChangedAt?: Date;

  @Column({ type: 'int', default: 0 })
  failedLoginAttempts: number;

  @Column({ type: 'timestamp', nullable: true })
  lockedUntil?: Date;

  @Column({ type: 'text', nullable: true })
  notes?: string;

  @Column('simple-array', { nullable: true })
  tags?: string[];

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  postalCode?: string;

  @Column({ type: 'text', nullable: true })
  addressLine1?: string;

  @Column({ type: 'text', nullable: true })
  addressLine2?: string;

  @Column({ type: 'timestamp', nullable: true })
  lastContactedAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  nextFollowUpAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt?: Date;

  @Column({ type: 'timestamp', nullable: true })
  emailVerifiedAt?: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
