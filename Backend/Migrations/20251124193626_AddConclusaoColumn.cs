using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoToDoList.Migrations
{
    /// <inheritdoc />
    public partial class AddConclusaoColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "DBT",
                keyColumn: "Tarefas",
                keyValue: null,
                column: "Tarefas",
                value: "");

            migrationBuilder.AlterColumn<string>(
                name: "Tarefas",
                table: "DBT",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext",
                oldNullable: true)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<bool>(
                name: "Conclusao",
                table: "DBT",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Conclusao",
                table: "DBT");

            migrationBuilder.AlterColumn<string>(
                name: "Tarefas",
                table: "DBT",
                type: "longtext",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }
    }
}
