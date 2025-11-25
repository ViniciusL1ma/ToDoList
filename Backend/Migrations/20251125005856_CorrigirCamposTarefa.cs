using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoToDoList.Migrations
{
    /// <inheritdoc />
    public partial class CorrigirCamposTarefa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Titulo",
                table: "DBT",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Titulo",
                table: "DBT");
        }
    }
}
