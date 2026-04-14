import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBook1775570456396 implements MigrationInterface {
    name = 'CreateBook1775570456396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`price\` decimal NULL, \`pages\` int NULL, \`publisher\` varchar(255) NULL, \`language\` varchar(255) NULL, \`isbn\` varchar(255) NULL, \`genre\` varchar(255) NULL, \`tags\` text NULL, \`stock\` int NOT NULL DEFAULT '0', \`isAvailable\` tinyint NOT NULL DEFAULT 1, \`rating\` float NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`book\``);
    }

}
