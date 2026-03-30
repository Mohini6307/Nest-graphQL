import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1774247206824 implements MigrationInterface {
    name = 'CreateUser1774247206824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`firstName\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`phone\` varchar(20) NULL, \`countryCode\` varchar(5) NULL, \`alternatePhone\` varchar(20) NULL, \`company\` varchar(255) NULL, \`jobTitle\` varchar(255) NULL, \`department\` varchar(255) NULL, \`leadStatus\` enum ('new', 'contacted', 'qualified', 'proposal_sent', 'negotiation', 'won', 'lost') NOT NULL DEFAULT 'new', \`leadSource\` varchar(255) NULL, \`customerType\` enum ('lead', 'prospect', 'customer', 'partner') NOT NULL DEFAULT 'lead', \`preferredContactMethod\` enum ('email', 'phone', 'whatsapp', 'sms') NOT NULL DEFAULT 'email', \`ownerName\` varchar(255) NULL, \`role\` enum ('super_admin', 'admin', 'manager', 'sales', 'support', 'user') NOT NULL DEFAULT 'user', \`accessScope\` enum ('all', 'team', 'owned', 'self') NOT NULL DEFAULT 'self', \`permissions\` text NULL, \`accountStatus\` enum ('pending', 'active', 'suspended', 'disabled') NOT NULL DEFAULT 'pending', \`canLogin\` tinyint NOT NULL DEFAULT 1, \`lastPasswordChangedAt\` timestamp NULL, \`failedLoginAttempts\` int NOT NULL DEFAULT '0', \`lockedUntil\` timestamp NULL, \`notes\` text NULL, \`tags\` text NULL, \`website\` varchar(255) NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`country\` varchar(255) NULL, \`postalCode\` varchar(255) NULL, \`addressLine1\` text NULL, \`addressLine2\` text NULL, \`lastContactedAt\` timestamp NULL, \`nextFollowUpAt\` timestamp NULL, \`lastLoginAt\` timestamp NULL, \`emailVerifiedAt\` timestamp NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, INDEX \`IDX_8e1f623798118e629b46a9e629\` (\`phone\`), INDEX \`IDX_1deceaa2e6008b9a3241252c77\` (\`company\`), INDEX \`IDX_c9d179a54dae43c4a178794d87\` (\`leadStatus\`), INDEX \`IDX_31947eb79f44e6d351a98cc845\` (\`customerType\`), INDEX \`IDX_6620cd026ee2b231beac7cfe57\` (\`role\`), INDEX \`IDX_c667bfc8b1785e7336f0611aad\` (\`accountStatus\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_c667bfc8b1785e7336f0611aad\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_6620cd026ee2b231beac7cfe57\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_31947eb79f44e6d351a98cc845\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_c9d179a54dae43c4a178794d87\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_1deceaa2e6008b9a3241252c77\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_8e1f623798118e629b46a9e629\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
