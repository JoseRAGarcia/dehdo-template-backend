import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLayout1679154996766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'layout',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'logo',
                    type: 'varchar',
                },
                {
                    name: 'icon',
                    type: 'varchar',
                },
                {
                    name: 'primary_color',
                    type: 'varchar',
                },
                {
                    name: 'company_id',
                    type: 'uuid',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
            foreignKeys: [
                {
                    name: 'LayoutCompany',
                    referencedTableName: 'company',
                    referencedColumnNames: ['id'],
                    columnNames: ['company_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('layout')
    }

}
