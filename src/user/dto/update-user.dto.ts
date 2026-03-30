import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsDateString, IsEnum, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';
import { CustomerType, LeadStatus, PreferredContactMethod } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(20)
    alternatePhone?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    company?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    jobTitle?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    department?: string;

    @ApiPropertyOptional({ enum: LeadStatus, default: LeadStatus.NEW })
    @IsOptional()
    @IsEnum(LeadStatus)
    leadStatus?: LeadStatus;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    leadSource?: string;

    @ApiPropertyOptional({ enum: CustomerType, default: CustomerType.LEAD })
    @IsOptional()
    @IsEnum(CustomerType)
    customerType?: CustomerType;

    @ApiPropertyOptional({
        enum: PreferredContactMethod,
        default: PreferredContactMethod.EMAIL,
    })
    @IsOptional()
    @IsEnum(PreferredContactMethod)
    preferredContactMethod?: PreferredContactMethod;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    ownerName?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    notes?: string;

    @ApiPropertyOptional({ type: [String] })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    tags?: string[];

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    website?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    city?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    state?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    country?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    postalCode?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    addressLine1?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    addressLine2?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    lastContactedAt?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    nextFollowUpAt?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    lastLoginAt?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsDateString()
    emailVerifiedAt?: string;
}
